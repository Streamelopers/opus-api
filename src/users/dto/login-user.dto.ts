import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
} from "class-validator";

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  password: string;
}
