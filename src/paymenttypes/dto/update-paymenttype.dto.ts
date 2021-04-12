import { PartialType } from "@nestjs/swagger";
import { CreatePaymenttypeDto } from "./create-paymenttype.dto";

export class UpdatePaymenttypeDto extends PartialType(CreatePaymenttypeDto) {}
