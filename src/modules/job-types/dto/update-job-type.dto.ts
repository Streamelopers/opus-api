import { IsString, IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateJobTypeDto {
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
