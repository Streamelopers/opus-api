import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateJobDto, UpdateJobDto } from "./dto";
import { Job } from "./entities";

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne({
      id,
      isActive: true,
    });

    if (!job) {
      throw new NotFoundException("Job not found");
    }

    return job;
  }

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const createdJob = this.jobRepository.create(createJobDto);

    return await this.jobRepository.save(createdJob);
  }

  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const updatedJob = await this.jobRepository.preload({
      id,
      ...updateJobDto,
    });

    if (!updatedJob) {
      throw new NotFoundException("Job not found");
    }

    await updatedJob.save();

    return updatedJob;
  }

  async remove(id: number): Promise<void> {
    const deletedJob = await this.jobRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!deletedJob) {
      throw new NotFoundException("Job not found");
    }

    await deletedJob.save();
  }
}
