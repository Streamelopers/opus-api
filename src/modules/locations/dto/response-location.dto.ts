import { Exclude, Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@Exclude()
export class ResponseLocationDto {
  @IsString()
  @ApiProperty()
  @Expose()
  name: string;

  @IsString()
  @ApiProperty()
  @Expose()
  latitude: string;

  @IsString()
  @ApiProperty()
  @Expose()
  longitude: string;
}
