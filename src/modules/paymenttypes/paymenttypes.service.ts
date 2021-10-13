import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryParams } from "@utils/query";
import { Like, Repository } from "typeorm";
import { CreatePaymenttypeDto } from "./dto/create-paymenttype.dto";
import { UpdatePaymenttypeDto } from "./dto/update-paymenttype.dto";
import { Paymenttype } from "./entities/paymenttype.entity";

@Injectable()
export class PaymenttypesService {
  constructor(
    @InjectRepository(Paymenttype)
    private paymenttypeRepository: Repository<Paymenttype>
  ) {}

  async create(
    createPaymenttypeDto: CreatePaymenttypeDto
  ): Promise<CreatePaymenttypeDto> {
    await this.paymenttypeRepository.insert(createPaymenttypeDto);

    return createPaymenttypeDto;
  }

  findAll(query: QueryParams): Promise<Paymenttype[]> {
    return this.paymenttypeRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<Paymenttype> {
    return this.paymenttypeRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(
    id: number,
    updatePaymenttypeDto: UpdatePaymenttypeDto
  ): Promise<UpdatePaymenttypeDto> {
    await this.paymenttypeRepository.update(id, updatePaymenttypeDto);

    return updatePaymenttypeDto;
  }

  async remove(id: number): Promise<string> {
    await this.paymenttypeRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return `EL tipo de pago fue desactivado correctamente`;
  }
}
