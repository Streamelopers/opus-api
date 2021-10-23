import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { ResponseInterceptor, TransformInterceptor } from "@interceptors/index";
import { CreateJobDto, UpdateJobDto, ResponseJobDto } from "./dto";
import { JobsService } from "./jobs.service";

@Controller("jobs")
@ApiTags("Jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobDto)
  )
  findAll(): Promise<ResponseJobDto[]> {
    return this.jobsService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobDto)
  )
  findOne(@Param("id") id: number): Promise<ResponseJobDto> {
    return this.jobsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobDto)
  )
  create(@Body() createJobDto: CreateJobDto): Promise<ResponseJobDto> {
    return this.jobsService.create(createJobDto);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobDto)
  )
  update(
    @Param("id") id: number,
    @Body() updateJobDto: UpdateJobDto
  ): Promise<ResponseJobDto> {
    return this.jobsService.update(id, updateJobDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.jobsService.remove(id);
  }
}
