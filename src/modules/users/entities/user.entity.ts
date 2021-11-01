import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Identity } from "@modules/auth/common/entities";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 50, nullable: true })
  lastname: string;

  @Column({ length: 50, unique: true, nullable: false })
  email: string;

  @OneToMany(() => Identity, (identity) => identity.user, {
    cascade: true,
    onUpdate: "CASCADE",
  })
  identities: Identity[];

  @Column({ nullable: true })
  picture: string;

  @Column({ type: "date", nullable: true, name: "birth_date" })
  birthDate: Date;

  @Column({ length: 50, nullable: true })
  location: string;

  @Column({ length: 150, nullable: true })
  bio: string;

  @Column({ nullable: true })
  website: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
