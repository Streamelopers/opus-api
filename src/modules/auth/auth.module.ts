import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { GitHubAuthModule } from "./github/github-auth.module";
import { BasicAuthModule } from "./basic/basic-auth.module";
import { Identity } from "./common/entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([Identity]),
    BasicAuthModule,
    GitHubAuthModule,
  ],
})
export class AuthenticationModule {}
