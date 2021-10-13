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
import { PaymenttypesService } from "./paymenttypes.service";
import { CreatePaymenttypeDto } from "./dto/create-paymenttype.dto";
import { UpdatePaymenttypeDto } from "./dto/update-paymenttype.dto";
import { QueryParams } from "@utils/query";
import { ResponseInterceptor } from "@interceptors/response.interceptor";
import { ApiTags } from "@nestjs/swagger";
import { Paymenttype } from "./entities/paymenttype.entity";

@ApiTags("Payment Types")
@Controller("paymenttypes")
@UseInterceptors(ResponseInterceptor)
export class PaymenttypesController {
  constructor(private readonly paymenttypesService: PaymenttypesService) {}

  @Post()
  create(
    @Body() createPaymenttypeDto: CreatePaymenttypeDto
  ): Promise<CreatePaymenttypeDto> {
    return this.paymenttypesService.create(createPaymenttypeDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Paymenttype[]> {
    return this.paymenttypesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Paymenttype> {
    return this.paymenttypesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePaymenttypeDto: UpdatePaymenttypeDto
  ): Promise<UpdatePaymenttypeDto> {
    return this.paymenttypesService.update(+id, updatePaymenttypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.paymenttypesService.remove(+id);
  }
}
