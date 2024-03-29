import { IsString, IsNumber } from "class-validator";
import { Expose, Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResponseUserDto {
  @Expose()
  @IsNumber()
  @ApiProperty({ type: Number })
  readonly id: number;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly name: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly email: string;
}
