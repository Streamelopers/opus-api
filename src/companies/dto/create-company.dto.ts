import {
  Length,
  IsUrl,
  IsInt,
  IsString,
  IsNotEmpty,
  IsPositive,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  @ApiProperty({
    minLength: 3,
    maxLength: 30
  })
  name: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  website: string;

  @IsString()
  @IsNotEmpty()
  @Length(20, 150)
  @ApiProperty({
    minLength: 20,
    maxLength: 150
  })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  user_id: number;

  user: object;
}
