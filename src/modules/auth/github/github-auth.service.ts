import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { REQUEST } from "@nestjs/core";
import { Repository } from "typeorm";
import { Request } from "express";

import { GitHubAuthPayload } from "./github-auth.payload";
import { SignInResponseDto } from "../basic/dtos";
import { User } from "@modules/users/entities";
import { Identity } from "../common/entities";
import { Identities } from "../common/enums";

@Injectable()
export class GitHubAuthService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async callback(): Promise<SignInResponseDto> {
    const payload = this.request.user as GitHubAuthPayload;

    if (!payload) {
      throw new UnauthorizedException("Unathorized");
    }

    const { accessToken, avatarUrl, email, name, refreshToken } = payload;

    let user = await this.usersRepository.findOne({
      where: { email: email.toLowerCase() },
      relations: ["identities"],
    });

    if (!user) {
      const createdUser = this.usersRepository.create({
        name,
        email: email.toLowerCase(),
        picture: avatarUrl,
        identities: [
          {
            email,
            identity: Identities.GITHUB,
            isVerified: true,
            activationDate: new Date(),
            accessToken,
            refreshToken,
          },
        ],
      });

      user = await createdUser.save();
    } else {
      const identity = user.identities.find(
        (usr) => usr.identity === Identities.GITHUB
      );

      if (!identity) {
        const _identity = new Identity();

        _identity.user = user;
        _identity.email = email;
        _identity.identity = Identities.GITHUB;
        _identity.isVerified = true;
        _identity.activationDate = new Date();
        _identity.accessToken = accessToken;
        _identity.refreshToken = refreshToken;

        user.identities.push(_identity);

        await user.save();
      }
    }

    const token = this.jwtService.sign(payload);

    return {
      id: user.id,
      name,
      token,
      email,
      identity: Identities.GITHUB,
    };
  }
}
