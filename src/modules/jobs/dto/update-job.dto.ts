import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateJobDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  howToApply: string;

  @IsNumber()
  @ApiProperty()
  maxSalary: number;

  @IsNumber()
  @ApiProperty()
  minSalary: number;

  @IsBoolean()
  @ApiProperty()
  isRemote: boolean;

  @IsBoolean()
  @ApiProperty()
  isRemoteOnly: boolean;

  @IsString()
  @ApiProperty()
  applicationTarget: string;

  @IsNumber()
  @ApiProperty()
  userId: number;

  @IsNumber()
  @ApiProperty()
  companyId: number;

  @IsNumber()
  @ApiProperty()
  levelId: number;

  @IsNumber()
  @ApiProperty()
  currencyId: number;
}
