import { Repository, Like } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";
import { Level } from "./entities/level.entity";
import { QueryParams } from "../../framework/utils/query";

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level) private levelRepository: Repository<Level>
  ) {}

  async create(createLevelDto: CreateLevelDto): Promise<CreateLevelDto> {
    await this.levelRepository.insert(createLevelDto);

    return createLevelDto;
  }

  findAll(query: QueryParams) {
    return this.levelRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number) {
    return this.levelRepository.findOne({
      id,
      isActive: false,
    });
  }

  async update(
    id: number,
    updateLevelDto: UpdateLevelDto
  ): Promise<UpdateLevelDto> {
    await this.levelRepository.update(id, updateLevelDto);

    return updateLevelDto;
  }

  async remove(id: number): Promise<string> {
    await this.levelRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "El level fue desactivado correctamente";
  }
}
