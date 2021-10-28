import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-github2";

import { GitHubAuthPayload } from "./github-auth.payload";
import { Identities } from "../common/enums";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get("GITHUB_CLIENT_ID"),
      clientSecret: configService.get("GITHUB_CLIENT_SECRET"),
      callbackURL: `${configService.get("HOST_URL")}/api/auth/github/callback`,
      scope: "user:email",
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any
  ): Promise<void> {
    const { avatar_url, name } = profile._json;

    const user: GitHubAuthPayload = {
      accessToken,
      refreshToken,
      avatarUrl: avatar_url,
      email: profile.emails[0].value,
      name,
      identity: Identities.GITHUB,
    };

    done(null, user);
  }
}
