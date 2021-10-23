import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TransformInterceptor, ResponseInterceptor } from "@interceptors/index";
import { CreateCurrencyDto } from "./dto/create-currency.dto";
import { UpdateCurrencyDto } from "./dto/update-currency.dto";
import { CurrenciesService } from "./currencies.service";
import { ResponseCurrencyDto } from "./dto";

@ApiTags("Currencies")
@Controller("currencies")
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCurrencyDto)
  )
  create(
    @Body() createCurrencyDto: CreateCurrencyDto
  ): Promise<ResponseCurrencyDto> {
    return this.currenciesService.create(createCurrencyDto);
  }

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCurrencyDto)
  )
  findAll(): Promise<CreateCurrencyDto[]> {
    return this.currenciesService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCurrencyDto)
  )
  findOne(@Param("id") id: number): Promise<CreateCurrencyDto> {
    return this.currenciesService.findOne(id);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCurrencyDto)
  )
  update(
    @Param("id") id: number,
    @Body() updateCurrencyDto: UpdateCurrencyDto
  ): Promise<ResponseCurrencyDto> {
    return this.currenciesService.update(id, updateCurrencyDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.currenciesService.remove(id);
  }
}
