import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateJobTypeDto, UpdateJobTypeDto } from "./dto";
import { JobType } from "./entities";

@Injectable()
export class JobTypesService {
  constructor(
    @InjectRepository(JobType) private jobTypeRepository: Repository<JobType>
  ) {}

  findAll(): Promise<JobType[]> {
    return this.jobTypeRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<JobType> {
    const jobType = await this.jobTypeRepository.findOne({
      id,
      isActive: true,
    });

    if (!jobType) {
      throw new NotFoundException("Job Type not found");
    }

    return jobType;
  }

  async create(createJobTypeDto: CreateJobTypeDto): Promise<JobType> {
    const createdJobType = this.jobTypeRepository.create(createJobTypeDto);

    return await this.jobTypeRepository.save(createdJobType);
  }

  async update(
    id: number,
    updateJobTypeDto: UpdateJobTypeDto
  ): Promise<JobType> {
    const updatedJobType = await this.jobTypeRepository.preload({
      id,
      ...updateJobTypeDto,
    });

    if (!updatedJobType) {
      throw new NotFoundException("Job Type not found");
    }

    await updatedJobType.save();

    return updatedJobType;
  }

  async remove(id: number): Promise<void> {
    const deletedJobType = await this.jobTypeRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!deletedJobType) {
      throw new NotFoundException("Job Type not found");
    }

    await deletedJobType.save();
  }
}
