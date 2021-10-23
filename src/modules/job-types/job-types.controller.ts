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
import { CreateJobTypeDto, UpdateJobTypeDto, ResponseJobTypeDto } from "./dto";
import { JobTypesService } from "./job-types.service";

@ApiTags("Job-Types")
@Controller("jobtypes")
export class JobTypesController {
  constructor(private readonly jobTypesService: JobTypesService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobTypeDto)
  )
  findAll(): Promise<ResponseJobTypeDto[]> {
    return this.jobTypesService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobTypeDto)
  )
  findOne(@Param("id") id: number): Promise<ResponseJobTypeDto> {
    return this.jobTypesService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobTypeDto)
  )
  create(
    @Body() createJobTypeDto: CreateJobTypeDto
  ): Promise<ResponseJobTypeDto> {
    return this.jobTypesService.create(createJobTypeDto);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseJobTypeDto)
  )
  update(
    @Param("id") id: number,
    @Body() updateJobtypeDto: UpdateJobTypeDto
  ): Promise<ResponseJobTypeDto> {
    return this.jobTypesService.update(id, updateJobtypeDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.jobTypesService.remove(id);
  }
}
