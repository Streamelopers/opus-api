import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { CurrenciesService } from "./currencies.service";
import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { QueryParams } from "../../framework/utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";
import { Currency } from "./entities/currency.entity";

@ApiTags("Currencies")
@Controller("currencies")
@UseInterceptors(ResponseInterceptor)
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  create(
    @Body() createCurrencyDto: CreateCurrencyDto
  ): Promise<CreateCurrencyDto> {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Currency[]> {
    return this.currenciesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Currency> {
    return this.currenciesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCurrencyDto: UpdateCurrencyDto
  ): Promise<UpdateCurrencyDto> {
    return this.currenciesService.update(+id, updateCurrencyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.currenciesService.remove(+id);
  }
}
