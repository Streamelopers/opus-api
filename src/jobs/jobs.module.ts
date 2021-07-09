import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { JobsController } from "./jobs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Job } from "./entities/job.entity";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Job, User])],
  controllers: [JobsController],
  providers: [JobsService, UsersService],
})
export class JobsModule {}
