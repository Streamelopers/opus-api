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
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { QueryParams } from "../../framework/utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";
import { Tag } from "./entities/tag.entity";

@ApiTags("Tags")
@Controller("tags")
@UseInterceptors(ResponseInterceptor)
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  create(@Body() createTagDto: CreateTagDto): Promise<CreateTagDto> {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Tag[]> {
    return this.tagsService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Tag> {
    return this.tagsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTagDto: UpdateTagDto
  ): Promise<UpdateTagDto> {
    return this.tagsService.update(+id, updateTagDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.tagsService.remove(+id);
  }
}
