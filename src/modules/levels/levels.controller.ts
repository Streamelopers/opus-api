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
import { CreateLevelDto, UpdateLevelDto, ResponseLevelDto } from "./dto";
import { LevelsService } from "./levels.service";

@ApiTags("Levels")
@Controller("levels")
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLevelDto)
  )
  findAll(): Promise<ResponseLevelDto[]> {
    return this.levelsService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLevelDto)
  )
  findOne(@Param("id") id: number): Promise<ResponseLevelDto> {
    return this.levelsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLevelDto)
  )
  create(@Body() createLevelDto: CreateLevelDto): Promise<ResponseLevelDto> {
    return this.levelsService.create(createLevelDto);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLevelDto)
  )
  update(
    @Param("id") id: number,
    @Body() updateLevelDto: UpdateLevelDto
  ): Promise<ResponseLevelDto> {
    return this.levelsService.update(id, updateLevelDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.levelsService.remove(id);
  }
}
