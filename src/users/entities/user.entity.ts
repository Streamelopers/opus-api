import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Base } from "../../../framework/entities/base";
import { Job } from "../../jobs/entities/job.entity";

@Entity("users")
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
