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
import { UsersService } from "src/users/users.service";

@Controller("jobs")
@UseInterceptors(ResponseInterceptor)
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto): Promise<Job> {
    /**
     * @TODO: Need to finish the validation and assign all the values.
     */
    const job = new Job();
    job.title = createJobDto.title;
    job.description = createJobDto.description;
    job.howToApply = createJobDto.howToApply;
    job.isRemote = createJobDto.isRemote;
    job.isRemoteOnly = createJobDto.isRemoteOnly;
    job.applicationTarget = createJobDto.applicationTarget;
    job.maxSalary = createJobDto.maxSalary;
    job.minSalary = createJobDto.minSalary;
    const user = await this.usersService.findOne(createJobDto.userId);
    if (user) {
      job.user = user;
    }
    return this.jobsService.create(job);
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
