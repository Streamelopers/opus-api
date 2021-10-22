import { IsString, IsBoolean } from "class-validator";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreatedAccountDto {
  @IsString()
  @Expose()
  message: string;

  @IsBoolean()
  @Expose()
  successs: boolean;
}
