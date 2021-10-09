import { IsString, IsBoolean, IsNumber } from "class-validator";

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

  @IsNumber()
  jobTypeId: number;

  @IsNumber()
  currencyId: number;
}
