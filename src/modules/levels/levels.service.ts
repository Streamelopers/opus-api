import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateLevelDto, UpdateLevelDto } from "./dto";
import { Level } from "./entities";

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level) private levelRepository: Repository<Level>
  ) {}

  findAll(): Promise<Level[]> {
    return this.levelRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<Level> {
    const level = await this.levelRepository.findOne({
      id,
      isActive: false,
    });

    if (!level) {
      throw new NotFoundException("Level not found");
    }

    return level;
  }

  async create(createLevelDto: CreateLevelDto): Promise<Level> {
    const createdLevel = this.levelRepository.create(createLevelDto);

    return await this.levelRepository.save(createdLevel);
  }

  async update(id: number, updateLevelDto: UpdateLevelDto): Promise<Level> {
    const updatedLevel = await this.levelRepository.preload({
      id,
      ...updateLevelDto,
    });

    if (!updatedLevel) {
      throw new NotFoundException("Level not found");
    }

    await updatedLevel.save();

    return updatedLevel;
  }

  async remove(id: number): Promise<void> {
    const deletedLevel = await this.levelRepository.preload({
      id,
    });

    if (!deletedLevel) {
      throw new NotFoundException("Level not found");
    }

    await deletedLevel.save();
  }
}
