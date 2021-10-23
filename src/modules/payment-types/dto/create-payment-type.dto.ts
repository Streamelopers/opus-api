import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreatePaymentTypeDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  @ApiProperty()
  description: string;
}
