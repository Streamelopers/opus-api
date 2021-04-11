import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { JobtypesService } from "./jobtypes.service";
import { CreateJobtypeDto } from "./dto/create-jobtype.dto";
import { UpdateJobtypeDto } from "./dto/update-jobtype.dto";
import { QueryParams } from "../../framework/utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";

@ApiTags("Job-Types")
@Controller("jobtypes")
@UseInterceptors(ResponseInterceptor)
export class JobtypesController {
  constructor(private readonly jobtypesService: JobtypesService) {}

  @Post()
  create(@Body() createJobtypeDto: CreateJobtypeDto) {
    return this.jobtypesService.create(createJobtypeDto);
  }

  @Get()
  findAll(@Query() params: QueryParams) {
    return this.jobtypesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.jobtypesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateJobtypeDto: UpdateJobtypeDto) {
    return this.jobtypesService.update(+id, updateJobtypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.jobtypesService.remove(+id);
  }
}
