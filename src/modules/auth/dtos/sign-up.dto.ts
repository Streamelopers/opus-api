import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
} from "class-validator";

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  @ApiProperty({ type: String })
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(4)
  @ApiProperty({ type: String })
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(4)
  @ApiProperty({ type: String })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  @ApiProperty({ type: String })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(30)
  @ApiProperty({ type: String })
  password: string;
}
