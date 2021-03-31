import { Length, IsNotEmpty, IsString } from "class-validator";

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  name: string;
}
