import { IsUrl, IsString, IsNumber } from "class-validator";
import { Exclude, Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResponseCompanyDto {
  @IsNumber()
  @ApiProperty()
  @Expose()
  id: number;

  @IsString()
  @ApiProperty()
  @Expose()
  name: string;

  @IsString()
  @IsUrl()
  @ApiProperty()
  @Expose()
  website: string;

  @IsString()
  @ApiProperty()
  @Expose()
  description: string;
}
