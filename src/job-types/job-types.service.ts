import { Injectable } from '@nestjs/common';
import { CreateJobTypeDto } from './dto/create-job-type.dto';
import { UpdateJobTypeDto } from './dto/update-job-type.dto';

@Injectable()
export class JobTypesService {
  create(createJobTypeDto: CreateJobTypeDto) {
    return 'This action adds a new jobType';
  }

  findAll() {
    return `This action returns all jobTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobType`;
  }

  update(id: number, updateJobTypeDto: UpdateJobTypeDto) {
    return `This action updates a #${id} jobType`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobType`;
  }
}
