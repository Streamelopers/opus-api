import { IsString, IsNumber } from "class-validator";
import { Exclude, Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResponseCurrencyDto {
  @IsNumber()
  @ApiProperty()
  @Expose()
  id: number;

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @ApiProperty()
  @Expose()
  symbol: string;

  @IsString()
  @ApiProperty()
  @Expose()
  isoCode: string;
}
