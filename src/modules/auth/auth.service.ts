import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  Inject,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { ConfigService } from "@nestjs/config";
import { Repository, MoreThan } from "typeorm";
import { MailService } from "@sendgrid/mail";
import { JwtService } from "@nestjs/jwt";
import { REQUEST } from "@nestjs/core";
import { compare } from "bcryptjs";
import { Request } from "express";

import { SignUpDto, SignInDto, LoggedInDto, CreatedAccountDto } from "./dtos";
import { SEND_GRID } from "@providers/sendgrid/sendgrid.constant";
import { UsersService } from "@modules/users/users.service";
import { JwtPayload } from "./interfaces/payload.interface";
import { User, Token } from "@modules/users/entities";

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(SEND_GRID)
    private readonly sendGridService: MailService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async signup(user: SignUpDto): Promise<CreatedAccountDto> {
    const { username, email } = user;
    const userAlreadyExists = await this.usersService.getUserByEmailOrUsername(
      username,
      email
    );

    if (userAlreadyExists) {
      throw new ConflictException("Username or email already exists");
    }

    const createdUser = await this.usersService.create(user);

    const message = await this.sendVerificationEmail(createdUser);

    return {
      message,
      successs: true,
    };
  }

  async signin(user: SignInDto): Promise<LoggedInDto> {
    const { username, password } = user;

    const foundUser: User = await this.usersService.getUserByEmailOrUsername(
      username
    );

    if (!foundUser) {
      throw new NotFoundException("User does not exist");
    }

    const isMatch = await compare(password, foundUser.password);

    if (!isMatch) {
      throw new UnauthorizedException("Incorret password");
    }

    if (!foundUser.isVerified) {
      throw new UnauthorizedException("Your account has not been verified.");
    }

    const payload: JwtPayload = {
      id: foundUser.id,
      name: foundUser.name,
      username: user.username,
      email: foundUser.email,
    };

    const token = this.jwtService.sign(payload);

    return plainToClass(LoggedInDto, { token, user: foundUser });
  }

  async verify(token: string): Promise<string> {
    const foundToken: Token = await this.tokenRepository.findOne({ token });

    if (!foundToken) {
      throw new BadRequestException(
        "We were unable to find a valid token. Your token my have expired."
      );
    }

    const userId: number = foundToken.user.id;
    const user: User = await this.userRepository.findOne(userId);

    if (!user) {
      throw new BadRequestException(
        "We were unable to find a user for this token."
      );
    }

    if (user.isVerified) {
      throw new BadRequestException("This user has already been verified.");
    }

    user.isVerified = true;
    await user.save();

    return "The account has been verified. Please log in.";
  }

  async me(userId: number): Promise<LoggedInDto> {
    const user = await this.usersService.findOne(userId);

    const { id, name, email, username } = user;

    const payload: JwtPayload = {
      id,
      name,
      email,
      username,
    };

    const token = this.jwtService.sign(payload);

    return plainToClass(LoggedInDto, { token, user });
  }

  async validateEmail(email: string): Promise<boolean> {
    return (
      (await this.usersService.getUserByEmailOrUsername(null, email)) != null
    );
  }

  async sendVerificationEmail(user: User): Promise<string> {
    const { token } = await user.generateVerificationToken();
    const subject = "Account Verification Token";
    const to = user.email;
    const from = this.configService.get("FROM_EMAIL");
    const link = `http://${this.request.headers.host}/api/auth/verify?token=${token}`;
    const html = `<p>Hi ${user.username}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                  <br><p>If you did not request this, please ignore this email.</p>`;

    await this.sendGridService.send({ to, from, subject, html });

    return `A verification email has been sent to ${user.email}.`;
  }

  async resendToken(email: string): Promise<string> {
    const user: User = await this.usersService.getUserByEmailOrUsername(
      (email = email)
    );

    if (!user) {
      throw new UnauthorizedException(
        `The email address ${email} is not associated with any account. Double-check your email address and try again.`
      );
    }

    if (user.isVerified) {
      throw new BadRequestException(
        "This account has already been verified. Please log in."
      );
    }

    return await this.sendVerificationEmail(user);
  }

  async recoverPassword(email: string) {
    const user: User = await this.usersService.getUserByEmailOrUsername(
      null,
      email
    );

    if (!user) {
      throw new UnauthorizedException(
        `The email address ${email} is not associated with any account. Double-check your email address and try again.`
      );
    }

    user.generatePasswordReset();
    await user.save();

    let subject = "Password change request";
    let to = user.email;
    let from = process.env.FROM_EMAIL;
    let link = `http://${this.request.headers.host}/api/auth/reset?token=${user.resetPasswordToken}`;
    let html = `<p>Hi ${user.username}</p>
                    <p>Please click on the following <a href="${link}">link</a> to reset your password.</p> 
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`;

    await this.sendGridService.send({ to, from, subject, html });

    return `A verification email has been sent to ${user.email}.`;
  }

  async reset(token: string): Promise<void> {
    const user = await this.userRepository.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: MoreThan(new Date()),
    });

    if (!user) {
      throw new UnauthorizedException(
        "Password reset token is invalid or has expired."
      );
    }
  }

  async resetPassword(token: string, password: string): Promise<string> {
    const user = await this.userRepository.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: MoreThan(new Date()),
    });

    if (!user) {
      throw new UnauthorizedException(
        "Password reset token is invalid or has expired."
      );
    }

    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    user.isVerified = true;
    await user.save();

    const subject = "Your password has been changed";
    const to = user.email;
    const from = process.env.FROM_EMAIL;
    const html = `<p>Hi ${user.username}</p>
                <p>This is a confirmation that the password for your account ${user.email} has just been changed.</p>`;

    await this.sendGridService.send({ to, from, subject, html });

    return "Your password has been updated.";
  }
}
