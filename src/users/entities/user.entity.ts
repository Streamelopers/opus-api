import { Base } from "../../../framework/entities/base";
import { Entity, Column} from "typeorm";
@Entity()
export class Users extends Base {
  @Column({name:"first_name"})
  firstname: string;

  @Column({name:"last_name"})
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}