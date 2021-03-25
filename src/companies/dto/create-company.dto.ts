import {
  Length,
  IsUrl,
  IsInt,
  IsString,
  IsNotEmpty,
  IsPositive
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @IsString()
  @IsUrl()
  website: string;

  @IsString()
  @IsNotEmpty()
  @Length(20, 150)
  description: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  user_id: number;

  user: object;
}
