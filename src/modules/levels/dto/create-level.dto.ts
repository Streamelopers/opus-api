import { Length, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLevelDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  @ApiProperty({
    minLength: 5,
    maxLength: 20,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 200)
  @ApiProperty({
    minLength: 5,
    maxLength: 200,
  })
  description: string;
}
