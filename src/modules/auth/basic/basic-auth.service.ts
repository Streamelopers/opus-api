import {
  Injectable,
  ConflictException,
  NotFoundException,
  Inject,
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { MailService } from "@sendgrid/mail";
import { JwtService } from "@nestjs/jwt";
import { REQUEST } from "@nestjs/core";
import { compareSync } from "bcrypt";
import { Request } from "express";

import {
  SignUpDto,
  SignInDto,
  SignInResponseDto,
  VerifyIdentityDto,
  ResetPasswordDto,
} from "./dtos";
import { JwtPayload } from "../common/interfaces/payload.interface";
import { SEND_GRID } from "@providers/sendgrid/sendgrid.constant";
import { User } from "@modules/users/entities";
import { Identities } from "../common/enums";

@Injectable()
export class BasicAuthService {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
    @Inject(SEND_GRID)
    private readonly sendGridService: MailService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly conection: Connection,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ message: string }> {
    const queryRunner = this.conection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { email, lastname, name, password } = signUpDto;
      const usersRepository = queryRunner.manager.getRepository(User);

      const user = await usersRepository.findOne({
        where: [{ email }],
      });

      if (user) {
        throw new ConflictException("User already exists");
      }

      const createdUser = usersRepository.create({
        name,
        lastname,
        email: email.toLowerCase(),
        identities: [
          {
            email,
            password,
            identity: Identities.BASIC,
          },
        ],
      });

      await usersRepository.save(createdUser);

      await queryRunner.commitTransaction();

      return await this.sendVerificationEmail(createdUser);
    } catch (ex) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(ex.message);
    } finally {
      await queryRunner.release();
    }
  }

  async signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
    const { email, password } = signInDto;

    const user: User = await this.usersRepository.findOne({
      where: { email },
      relations: ["identities"],
    });

    if (!user) {
      throw new NotFoundException("Invalid username or password");
    }

    const identity = user.identities.find(
      (usr) => usr.identity === Identities.BASIC
    );

    if (!identity) {
      throw new ConflictException(
        "This account has been registered with other authentication method"
      );
    }

    if (!compareSync(password, identity.password)) {
      throw new NotFoundException("Invalid username or password");
    }

    if (!identity.isVerified) {
      throw new ForbiddenException("Your account has not been verified.");
    }

    const payload: JwtPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      identity: Identities.BASIC,
    };

    const token = this.jwtService.sign(payload);

    return { token, ...payload };
  }

  async verifyAccount(
    verifyIdentityDto: VerifyIdentityDto
  ): Promise<{ message: string }> {
    const { email, token } = verifyIdentityDto;

    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
      relations: ["identities"],
    });

    if (!user) {
      throw new NotFoundException("Email not found");
    }

    const identity = user.identities.find(
      (usr) =>
        usr.identity === Identities.BASIC && usr.verificationToken === token
    );

    if (!identity) {
      throw new BadRequestException("Invalid token");
    }

    if (identity.isVerified) {
      throw new BadRequestException("This account has already been verified.");
    }

    identity.isVerified = true;
    identity.activationDate = new Date();
    await identity.save();

    return { message: "The account has been verified. Please log in." };
  }

  async validateEmail(email: string): Promise<{ isValid: boolean }> {
    const user = await this.usersRepository.findOne({
      where: { email },
    });

    return { isValid: user != null };
  }

  async sendVerificationEmail(user: User): Promise<{ message: string }> {
    const identity = user.identities.find(
      (usr) => usr.identity === Identities.BASIC
    );

    const token = await identity.generateVerificationToken();
    const subject = "Account Verification Token";
    const to = user.email;
    const from = this.configService.get("FROM_EMAIL");
    const link = `http://${this.request.headers.host}/api/auth/verify?token=${token}&email=${user.email}`;
    const html = `<p>Hi <strong>${user.name}</strong><p>
                  <p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                  <p>If you did not request this, please ignore this email.</p>`;

    await this.sendGridService.send({ to, from, subject, html });

    return { message: `A verification email has been sent to ${user.email}.` };
  }

  async resendToken(email: string): Promise<{ message: string }> {
    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `The email address ${email} is not associated with any account. Double-check your email address and try again.`
      );
    }

    const identity = user.identities.find(
      (usr) => usr.identity === Identities.BASIC
    );

    if (!identity) {
      throw new ConflictException(
        "This account has been registered with other authentication method"
      );
    }

    if (identity.isVerified) {
      throw new ForbiddenException(
        "This account has already been verified. Please log in."
      );
    }

    return await this.sendVerificationEmail(user);
  }

  async recoverPassword(email: string): Promise<{ message: string }> {
    const user: User = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `The email address ${email} is not associated with any account. Double-check your email address and try again.`
      );
    }

    const identity = user.identities.find(
      (usr) => usr.identity === Identities.BASIC
    );

    if (!identity) {
      throw new ConflictException(
        "This account has been registered with other authentication method"
      );
    }

    await identity.generatePasswordReset();

    const subject = "Password change request";
    const to = user.email;
    const from = this.configService.get("FROM_EMAIL");
    const link = `http://${this.request.headers.host}/api/auth/reset?token=${identity.resetPasswordToken}`;
    const html = `<p>Hi <strong>${user.name}</strong></p>
                  <p>Please click on the following <a href="${link}">link</a> to reset your password.</p> 
                  <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`;

    await this.sendGridService.send({ to, from, subject, html });

    return { message: `A verification email has been sent to ${user.email}.` };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    const user = await this.usersRepository.findOne({
      where: {
        email: resetPasswordDto.email,
      },
    });

    if (!user) {
      throw new ForbiddenException(
        "Password reset token is invalid or has expired."
      );
    }

    const identity = user.identities.find(
      (usr) => usr.identity === Identities.BASIC
    );

    if (!identity) {
      throw new ConflictException(
        "This account has been registered with other authentication method"
      );
    }

    const isTokenExpired =
      identity.resetPasswordToken === resetPasswordDto.token &&
      new Date() > identity.resetPasswordTokenExpiration;

    if (!isTokenExpired) {
      throw new ForbiddenException(
        "Password reset token is invalid or has expired."
      );
    }

    identity.password = resetPasswordDto.password;
    identity.resetPasswordToken = null;
    identity.resetPasswordTokenExpiration = null;
    identity.isVerified = true;

    await user.save();

    const subject = "Your password has been changed";
    const to = user.email;
    const from = this.configService.get("FROM_EMAIL");
    const html = `<p>Hi <strong>${user.name}</strong>,</p>
                  <p>This is a confirmation that the password for your account <strong>${user.email}</strong> has just been changed.</p>`;

    await this.sendGridService.send({ to, from, subject, html });
  }
}
