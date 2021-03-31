import {
    IsEmail,
    IsString,
    IsNotEmpty,
    IsNumber,
  } from "class-validator";
  
  export class AuthDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsNumber()
    userId: number;
  }
  