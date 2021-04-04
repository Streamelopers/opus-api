import { Entity, Column } from "typeorm";
import { Base } from "../../../framework/entities/base";

@Entity()
export class User extends Base {
  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
