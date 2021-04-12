import {
  Length,
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
