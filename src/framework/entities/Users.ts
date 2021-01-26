import {Entity, Column} from "typeorm";
import {
  Length,
  IsEmail,
  IsAlphanumeric,
  MinLength
} from "class-validator";
import {Base} from "./Base";

@Entity()
export class Users extends Base {
  @Column()
  @Length(2, 40)
  firstname: string;

  @Column()
  @Length(3, 40)
  lastname: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @MinLength(8)
  @IsAlphanumeric()
  password: string;
}
