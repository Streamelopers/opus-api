import { IsString } from "class-validator";
import { Type, Exclude, Expose } from "class-transformer";
import { ResponseUserDto } from "@modules/users/dtos";

@Exclude()
export class LoggedInDto {
  @IsString()
  @Expose()
  token: string;

  @Type(() => ResponseUserDto)
  @Expose()
  user: ResponseUserDto;
}
