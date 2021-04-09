import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";
import { ValidationEntity } from "framework/pipes/validationEntity.pipe";
import { User } from "src/users/entities/user.entity";
import { Company } from "src/companies/entities/company.entity";
import { Level } from "src/levels/entities/level.entity";
import { Jobtype } from "src/jobtypes/entities/jobtype.entity";
import { Currency } from "src/currencies/entities/currency.entity";

@Controller("jobs")
@UseInterceptors(ResponseInterceptor)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UsePipes(new ValidationEntity(User, "user"))
  @UsePipes(new ValidationEntity(Company, "company"))
  @UsePipes(new ValidationEntity(Level, "level"))
  // @UsePipes(new ValidationEntity(Jobtype, "jobtype"))
  @UsePipes(new ValidationEntity(Currency, "currency"))
  create(@Body() createJobDto: CreateJobDto) {
    console.log(createJobDto)
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateJobDto: UpdateJobDto) {
    console.log(updateJobDto)
    return this.jobsService.update(+id, updateJobDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobsService.remove(+id);
  }
}
