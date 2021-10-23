import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { JobTypesController } from "./job-types.controller";
import { JobTypesService } from "./job-types.service";
import { JobType } from "./entities/job-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([JobType])],
  controllers: [JobTypesController],
  providers: [JobTypesService],
})
export class JobtypesModule {}
