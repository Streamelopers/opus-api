import { Expose, Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@Exclude()
export class UpdateUserDto {
  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly name: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly lastname: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly username: string;
}
