import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { QueryParams } from "../../framework/utils/query";

@Controller("tags")
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  findAll(@Query() params: QueryParams) {
    return this.tagsService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tagsService.remove(+id);
  }
}
