import {
  Length,
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsBoolean,
  IsNumber,
} from "class-validator";
// import { ApiProperty } from "@nestjs/swagger";

export class CreateJobDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  howToApply: string;

  @IsNumber()
  maxSalary: number;

  @IsNumber()
  minSalary: number;

  @IsBoolean()
  isRemote: boolean;

  @IsBoolean()
  isRemoteOnly: boolean;

  @IsString()
  applicationTarget: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  companyId: number;

  @IsNumber()
  levelId: number;

  // @IsNumber()
  // jobtype_id: number;

  @IsNumber()
  currencyId: number;
}
