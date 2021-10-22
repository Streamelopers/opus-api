import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";

import { User } from "@modules/users/entities/user.entity";

@Entity({ name: "companies" })
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  description: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
