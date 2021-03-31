import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CurrenciesService } from "./currencies.service";
import { CurrenciesController } from "./currencies.controller";
import { Currency } from "./entities/currency.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
})
export class CurrenciesModule {}
