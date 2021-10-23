import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { Currency } from "./entities/currency.entity";

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency) private currencyRepository: Repository<Currency>
  ) {}

  findAll(): Promise<Currency[]> {
    return this.currencyRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<Currency> {
    const currency = await this.currencyRepository.findOne({
      id,
      isActive: true,
    });

    if (!currency) {
      throw new NotFoundException("Currency not found");
    }

    return currency;
  }

  async create(createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    const createdCurrency = this.currencyRepository.create(createCurrencyDto);
    const currency = await this.currencyRepository.save(createdCurrency);

    return currency;
  }

  async update(
    id: number,
    updateCurrencyDto: UpdateCurrencyDto
  ): Promise<Currency> {
    const updatedCurrency = await this.currencyRepository.preload({
      id,
      ...updateCurrencyDto,
    });

    if (!updatedCurrency) {
      throw new NotFoundException("Currency not found");
    }

    await updatedCurrency.save();

    return updatedCurrency;
  }

  async remove(id: number): Promise<void> {
    const updatedCurrency = await this.currencyRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!updatedCurrency) {
      throw new NotFoundException("Currency not found");
    }

    await updatedCurrency.save();
  }
}
