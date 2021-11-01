import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RecoverPasswordDto {
  @IsEmail()
  @IsString()
  @ApiProperty({ type: String })
  email: string;
}
