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
  user_id: number;

  @IsNumber()
  company_id: number;

  @IsNumber()
  level_id: number;

  @IsNumber()
  jobtype_id: number;

  @IsNumber()
  currency_id: number;

  // @IsNumber()
  // tags: number;

  // user: object;

  // company: object;

  // level: object;

  // jobtype: object;

  // currency: object;

  // tags: object[];
}
