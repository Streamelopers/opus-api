import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { Base } from "../../../framework/entities/base";
import { User } from "../../users/entities/user.entity";

@Entity("companies")
export class Company extends Base {
  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  description: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ nullable: true })
  userId: number;
}
