import {
  Length,
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

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
