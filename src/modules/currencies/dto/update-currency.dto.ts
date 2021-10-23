import { IsString, Length, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCurrencyDto {
  @IsString()
  @IsOptional()
  @Length(5, 20)
  @ApiProperty({
    minLength: 5,
    maxLength: 20,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  symbol: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  isoCode: string;
}
