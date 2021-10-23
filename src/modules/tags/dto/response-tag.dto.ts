import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
import { Exclude, Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResponseTagDto {
  @IsNumber()
  @ApiProperty()
  @Expose()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Expose()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Expose()
  description: string;
}
