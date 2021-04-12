import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreatePaymenttypeDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  name: string;
}
