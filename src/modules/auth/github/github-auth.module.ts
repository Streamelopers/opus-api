import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { GitHubAuthController } from "./github-auth.controller";
import { GitHubAuthService } from "./github-auth.service";
import { GitHubStrategy } from "./github-auth.strategy";
import { User } from "@modules/users/entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          secret: configService.get("JWT_ACCESS_TOKEN_SECRET"),
          signOptions: {
            expiresIn: configService.get("JWT_ACCESS_TOKEN_EXPIRATION_TIME"),
          },
        };
      },
    }),
  ],
  controllers: [GitHubAuthController],
  providers: [GitHubAuthService, GitHubStrategy],
})
export class GitHubAuthModule {}
