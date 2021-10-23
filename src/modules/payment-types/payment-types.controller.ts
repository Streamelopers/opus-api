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

import {
  CreatePaymentTypeDto,
  ResponsePaymentTypeDto,
  UpdatePaymentTypeDto,
} from "./dto";
import { ResponseInterceptor, TransformInterceptor } from "@interceptors/index";
import { PaymentTypesService } from "./payment-types.service";

@ApiTags("Payment Types")
@Controller("paymentTypes")
export class PaymentTypesController {
  constructor(private readonly paymentTypesService: PaymentTypesService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponsePaymentTypeDto)
  )
  findAll(): Promise<ResponsePaymentTypeDto[]> {
    return this.paymentTypesService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponsePaymentTypeDto)
  )
  findOne(@Param("id") id: string): Promise<ResponsePaymentTypeDto> {
    return this.paymentTypesService.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponsePaymentTypeDto)
  )
  create(
    @Body() createPaymentTypeDto: CreatePaymentTypeDto
  ): Promise<ResponsePaymentTypeDto> {
    return this.paymentTypesService.create(createPaymentTypeDto);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponsePaymentTypeDto)
  )
  update(
    @Param("id") id: number,
    @Body() updatePaymentTypeDto: UpdatePaymentTypeDto
  ): Promise<ResponsePaymentTypeDto> {
    return this.paymentTypesService.update(id, updatePaymentTypeDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.paymentTypesService.remove(id);
  }
}
