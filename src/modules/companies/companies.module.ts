import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CompaniesController } from "./companies.controller";
import { UsersModule } from "@modules/users/users.module";
import { CompaniesService } from "./companies.service";
import { Company } from "./entities/company.entity";

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
