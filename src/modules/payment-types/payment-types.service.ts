import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreatePaymentTypeDto, UpdatePaymentTypeDto } from "./dto";
import { PaymentType } from "./entities";

@Injectable()
export class PaymentTypesService {
  constructor(
    @InjectRepository(PaymentType)
    private paymentTypeRepository: Repository<PaymentType>
  ) {}

  findAll(): Promise<PaymentType[]> {
    return this.paymentTypeRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<PaymentType> {
    const paymentType = await this.paymentTypeRepository.findOne({
      id,
      isActive: true,
    });

    if (!paymentType) {
      throw new NotFoundException("Payment Type not found");
    }

    return paymentType;
  }

  async create(
    createPaymentTypeDto: CreatePaymentTypeDto
  ): Promise<PaymentType> {
    const createdPaymentType =
      this.paymentTypeRepository.create(createPaymentTypeDto);

    return await this.paymentTypeRepository.save(createdPaymentType);
  }

  async update(
    id: number,
    updatePaymentTypeDto: UpdatePaymentTypeDto
  ): Promise<PaymentType> {
    const updatedPaymentType = await this.paymentTypeRepository.preload({
      id,
      ...updatePaymentTypeDto,
    });

    if (!updatedPaymentType) {
      throw new NotFoundException("Payment Type not found");
    }

    await updatedPaymentType.save();

    return updatedPaymentType;
  }

  async remove(id: number): Promise<void> {
    const deletedPaymentType = await this.paymentTypeRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!deletedPaymentType) {
      throw new NotFoundException("Payment Type not found");
    }

    await deletedPaymentType.save();
  }
}
