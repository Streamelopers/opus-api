import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCompanyDto {
  @IsString()
  @IsOptional()
  @Length(3, 30)
  @ApiProperty({
    minLength: 3,
    maxLength: 30,
  })
  name: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  @ApiProperty()
  website: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Length(20, 150)
  @ApiProperty({
    minLength: 20,
    maxLength: 150,
  })
  description: string;
}
