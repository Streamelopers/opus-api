import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { CurrenciesController } from "./currencies.controller";
import { CurrenciesService } from "./currencies.service";
import { Currency } from "./entities/currency.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
})
export class CurrenciesModule {}
