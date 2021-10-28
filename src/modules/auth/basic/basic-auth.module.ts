import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { SendGridModule } from "@providers/sendgrid/sendgrid.module";
import { BasicAuthController } from "./basic-auth.controller";
import { BasicAuthService } from "./basic-auth.service";
import { JwtStrategy } from "../common/strategies";
import { User } from "@modules/users/entities";

@Module({
  imports: [
    SendGridModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: "jwt" }),
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
    SendGridModule,
  ],
  controllers: [BasicAuthController],
  providers: [BasicAuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export class BasicAuthModule {}
