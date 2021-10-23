import { IsString, IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePaymentTypeDto {
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
