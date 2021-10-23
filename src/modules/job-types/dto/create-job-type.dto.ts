import { Length, IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateJobTypeDto {
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
  desctiption: string;
}
