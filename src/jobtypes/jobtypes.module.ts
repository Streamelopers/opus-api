import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JobtypesService } from "./jobtypes.service";
import { JobtypesController } from "./jobtypes.controller";
import { Jobtype } from "./entities/jobtype.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Jobtype])],
  controllers: [JobtypesController],
  providers: [JobtypesService],
})
export class JobtypesModule {}
