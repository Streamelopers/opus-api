import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateTagDto, UpdateTagDto } from "./dto";
import { Tag } from "./entities";

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      id,
      isActive: true,
    });

    if (!tag) {
      throw new NotFoundException("Tag not found");
    }

    return tag;
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const createdTag = this.tagRepository.create(createTagDto);

    return await this.tagRepository.save(createdTag);
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<Tag> {
    const tag = await this.tagRepository.preload({ id, ...updateTagDto });

    if (!tag) {
      throw new NotFoundException("Tag not found");
    }

    return tag;
  }

  async remove(id: number): Promise<void> {
    const tag = await this.tagRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!tag) {
      throw new NotFoundException("Tag not found");
    }
  }
}
