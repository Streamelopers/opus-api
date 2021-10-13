import { IsString, IsNotEmpty } from "class-validator";

export class TokenDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string;
}
