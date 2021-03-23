import { Injectable } from '@nestjs/common';
import { CreateJobtypeDto } from './dto/create-jobtype.dto';
import { UpdateJobtypeDto } from './dto/update-jobtype.dto';

@Injectable()
export class JobtypesService {
  create(createJobtypeDto: CreateJobtypeDto) {
    return 'This action adds a new jobtype';
  }

  findAll() {
    return `This action returns all jobtypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobtype`;
  }

  update(id: number, updateJobtypeDto: UpdateJobtypeDto) {
    return `This action updates a #${id} jobtype`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobtype`;
  }
}
