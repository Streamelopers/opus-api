import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  latitude: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  longitude: string;
}
