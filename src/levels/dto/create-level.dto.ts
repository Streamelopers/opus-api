import { Length, IsNotEmpty, IsString } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  name: string;
}
