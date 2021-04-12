import { Injectable } from '@nestjs/common';
import { CreatePaymenttypeDto } from './dto/create-paymenttype.dto';
import { UpdatePaymenttypeDto } from './dto/update-paymenttype.dto';

@Injectable()
export class PaymenttypesService {
  create(createPaymenttypeDto: CreatePaymenttypeDto) {
    return 'This action adds a new paymenttype';
  }

  findAll() {
    return `This action returns all paymenttypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymenttype`;
  }

  update(id: number, updatePaymenttypeDto: UpdatePaymenttypeDto) {
    return `This action updates a #${id} paymenttype`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymenttype`;
  }
}
