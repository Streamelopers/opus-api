import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PaymenttypesService } from "./paymenttypes.service";
import { CreatePaymenttypeDto } from "./dto/create-paymenttype.dto";
import { UpdatePaymenttypeDto } from "./dto/update-paymenttype.dto";

@Controller("paymenttypes")
export class PaymenttypesController {
  constructor(private readonly paymenttypesService: PaymenttypesService) {}

  @Post()
  create(@Body() createPaymenttypeDto: CreatePaymenttypeDto) {
    return this.paymenttypesService.create(createPaymenttypeDto);
  }

  @Get()
  findAll() {
    return this.paymenttypesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymenttypesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePaymenttypeDto: UpdatePaymenttypeDto
  ) {
    return this.paymenttypesService.update(+id, updatePaymenttypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymenttypesService.remove(+id);
  }
}
