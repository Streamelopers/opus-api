import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
} from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";
import { Job } from "./entities/job.entity";
import { QueryParams } from "framework/utils/query";

@Controller("jobs")
@UseInterceptors(ResponseInterceptor)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto): Promise<CreateJobDto> {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Job[]> {
    return this.jobsService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Job> {
    return this.jobsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateJobDto: UpdateJobDto
  ): Promise<UpdateJobDto> {
    return this.jobsService.update(+id, updateJobDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.jobsService.remove(+id);
  }
}
