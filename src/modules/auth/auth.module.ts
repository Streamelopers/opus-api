import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { SendGridModule } from "@providers/sendgrid/sendgrid.module";
import { AuthenticationController } from "./auth.controller";
import { UsersService } from "@modules/users/users.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthenticationService } from "./auth.service";
import { User, Token } from "@modules/users/entities";

@Module({
  imports: [
    SendGridModule,
    TypeOrmModule.forFeature([User, Token]),
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          secret: configService.get("JWT_SECRET"),
          signOptions: {
            expiresIn: 86_400,
          },
        };
      },
    }),
    SendGridModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtStrategy, UsersService],
  exports: [JwtStrategy, PassportModule],
})
export class AuthenticationModule {}
