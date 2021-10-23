import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { ResponseInterceptor, TransformInterceptor } from "@interceptors/index";
import { CreateTagDto, UpdateTagDto, ResponseTagDto } from "./dto";
import { TagsService } from "./tags.service";

@ApiTags("Tags")
@Controller("tags")
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseTagDto)
  )
  findAll(): Promise<ResponseTagDto[]> {
    return this.tagsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<ResponseTagDto> {
    return this.tagsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseTagDto)
  )
  create(@Body() createTagDto: CreateTagDto): Promise<ResponseTagDto> {
    return this.tagsService.create(createTagDto);
  }

  @Patch(":id")
  update(
    @Param("id") id: number,
    @Body() updateTagDto: UpdateTagDto
  ): Promise<ResponseTagDto> {
    return this.tagsService.update(id, updateTagDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.tagsService.remove(id);
  }
}
