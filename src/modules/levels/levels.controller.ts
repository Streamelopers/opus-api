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
import { LevelsService } from "./levels.service";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";
import { QueryParams } from "@utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "@interceptors/response.interceptor";
import { Level } from "./entities/level.entity";

@ApiTags("Levels")
@Controller("levels")
@UseInterceptors(ResponseInterceptor)
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  create(@Body() createLevelDto: CreateLevelDto): Promise<CreateLevelDto> {
    return this.levelsService.create(createLevelDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Level[]> {
    return this.levelsService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Level> {
    return this.levelsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLevelDto: UpdateLevelDto
  ): Promise<UpdateLevelDto> {
    return this.levelsService.update(+id, updateLevelDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.levelsService.remove(+id);
  }
}
