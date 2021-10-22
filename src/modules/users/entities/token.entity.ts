import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Entity,
  JoinColumn,
} from "typeorm";

import { User } from "./user.entity";

@Entity({ name: "tokens" })
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.tokens, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ type: "varchar", nullable: false })
  token: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
