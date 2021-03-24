import { Repository, Like } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { QueryParams } from '../../framework/utils/query';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  async create(createTagDto: CreateTagDto): Promise<CreateTagDto> {
    await this.tagRepository.insert(createTagDto);

    return createTagDto;
  }

  findAll(query: QueryParams): Promise<Tag[]> {
    return this.tagRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`)
      }
    });
  }

  findOne(id: number): Promise<Tag> {
    return this.tagRepository.findOne({
      id, isActive: true
    });
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<UpdateTagDto> {
    await this.tagRepository.update(id, updateTagDto);

    return UpdateTagDto;
  }

  async remove(id: number): Promise<string> {
    await this.tagRepository.update(id, {
      isActive: false,
      deletedAt: new Date()
    });

    return 'El tag fue desactivado correctamente';
  }
}
