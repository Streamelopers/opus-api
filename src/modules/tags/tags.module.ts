import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { TagsService } from "./tags.service";
import { TagsController } from "./tags.controller";
import { Tag } from "./entities/tag.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
