import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ minLength: 8 })
  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  password: string;
}
