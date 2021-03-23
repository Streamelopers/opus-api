import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  name: string;

  @IsString()
  symbol: string;

  @IsString()
  isoCode: string;
}
