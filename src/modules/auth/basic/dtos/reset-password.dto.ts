import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordDto {
  @IsEmail()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @ApiProperty({ type: String })
  password: string;

  @IsString()
  @ApiProperty({ type: String })
  token: string;
}
