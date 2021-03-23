import { Base } from "../../../framework/entities/base";
import { Entity, Column} from "typeorm";
@Entity()
export class Users extends Base {
  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}