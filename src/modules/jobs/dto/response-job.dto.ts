import { IsString, IsBoolean, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

import { Currency } from "@modules/currencies/entities";
import { Company } from "@modules/companies/entities";
import { Level } from "@modules/levels/entities";
import { User } from "@modules/users/entities";

@Exclude()
export class ResponseJobDto {
  @IsString()
  @ApiProperty()
  @Exclude()
  title: string;

  @IsString()
  @ApiProperty()
  @Exclude()
  description: string;

  @IsString()
  @ApiProperty()
  @Exclude()
  howToApply: string;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  maxSalary: number;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  minSalary: number;

  @IsBoolean()
  @ApiProperty()
  @Exclude()
  isRemote: boolean;

  @IsString()
  @ApiProperty()
  @Exclude()
  applicationTarget: string;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  user: User;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  company: Company;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  level: Level;

  @IsNumber()
  @ApiProperty()
  @Exclude()
  currency: Currency;
}
