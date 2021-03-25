import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateJobtypeDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  name: string;
}
