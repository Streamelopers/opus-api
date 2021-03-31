import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { CurrenciesService } from "./currencies.service";
import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { QueryParams } from "../../framework/utils/query";

@Controller("currencies")
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(@Body() createCurrencyDto: CreateCurrencyDto) {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll(@Query() params: QueryParams) {
    return this.currenciesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.currenciesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCurrencyDto: UpdateCurrencyDto
  ) {
    return this.currenciesService.update(+id, updateCurrencyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.currenciesService.remove(+id);
  }
}
