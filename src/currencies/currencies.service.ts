import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './entities/currency.entity';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { QueryParams } from '../../framework/utils/query';
import { Repository, Like } from 'typeorm';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency) private currencyRepository: Repository<Currency> 
  ) {}

  async create(createCurrencyDto: CreateCurrencyDto): Promise<CreateCurrencyDto> {
    await this.currencyRepository.insert(createCurrencyDto);

    return createCurrencyDto;
  }

  findAll(query: QueryParams): Promise<Currency[]> {
    return this.currencyRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`)
      }
    });
  }

  findOne(id: number) {
    return this.currencyRepository.findOne({
      id, isActive: true
    });
  }

  async update(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<UpdateCurrencyDto>{
    await this.currencyRepository.update(id, updateCurrencyDto);
    
    return updateCurrencyDto;
  }

  async remove(id: number): Promise<string> {
    await this.currencyRepository.update(id, { isActive: false });

    return 'El currency fue desactivado correctamente';
  }
}
