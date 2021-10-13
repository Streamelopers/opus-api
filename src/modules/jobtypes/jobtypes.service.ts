import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateJobtypeDto } from "./dto/create-jobtype.dto";
import { UpdateJobtypeDto } from "./dto/update-jobtype.dto";
import { QueryParams } from "@utils/query";
import { Jobtype } from "./entities/jobtype.entity";
import { Like, Repository } from "typeorm";

@Injectable()
export class JobtypesService {
  constructor(
    @InjectRepository(Jobtype) private jobtypeRepository: Repository<Jobtype>
  ) {}

  async create(createJobtypeDto: CreateJobtypeDto): Promise<CreateJobtypeDto> {
    await this.jobtypeRepository.insert(createJobtypeDto);

    return createJobtypeDto;
  }

  findAll(query: QueryParams): Promise<Jobtype[]> {
    return this.jobtypeRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<Jobtype> {
    return this.jobtypeRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(
    id: number,
    updateJobtypeDto: UpdateJobtypeDto
  ): Promise<UpdateJobtypeDto> {
    await this.jobtypeRepository.update(id, updateJobtypeDto);

    return updateJobtypeDto;
  }

  async remove(id: number): Promise<string> {
    await this.jobtypeRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "El tag fue desactivado correctamente";
  }
}
