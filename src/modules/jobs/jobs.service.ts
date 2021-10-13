import { Injectable } from "@nestjs/common";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Job } from "./entities/job.entity";
import { QueryParams } from "@utils/query";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>
  ) {}

  async create(createJobDto: CreateJobDto): Promise<CreateJobDto> {
    await this.jobRepository.insert(createJobDto);

    return createJobDto;
  }

  findAll(query: QueryParams): Promise<Job[]> {
    return this.jobRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        title: Like(`%${query.q}%`),
        description: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<Job> {
    return this.jobRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<UpdateJobDto> {
    await this.jobRepository.update(id, updateJobDto);

    return updateJobDto;
  }

  async remove(id: number): Promise<string> {
    await this.jobRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "La publicación fue eliminada de forma correcta";
  }
}
