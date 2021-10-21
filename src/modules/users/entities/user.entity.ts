import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from "typeorm";
import { genSalt, hash } from "bcryptjs";
import { randomBytes } from "crypto";

import { Token } from "./token.entity";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  lastname: string;

  @Column({ type: "varchar", length: 30, nullable: false, unique: true })
  username: string;

  @Column({ type: "varchar", length: 50, unique: true, nullable: false })
  email: string;

  @OneToMany((type) => Token, (token) => token.user)
  tokens: Token[];

  @Column({ type: "varchar", nullable: false })
  password: string;

  private tempPassword: string;

  @Column({ type: "varchar", nullable: true })
  picture: string | null;

  @Column({ type: "date", nullable: true, name: "birth_date" })
  birthDate: Date | null;

  @Column({ type: "varchar", length: 50, nullable: true })
  location: string | null;

  @Column({ type: "varchar", length: 150, nullable: true })
  bio: string | null;

  @Column({ type: "varchar", nullable: true })
  website: string | null;

  @Column({
    type: "bool",
    nullable: false,
    default: false,
    name: "is_verified",
  })
  isVerified: boolean;

  @Column({ type: "varchar", nullable: true, name: "reset_password_token" })
  resetPasswordToken: string | null;

  @Column({ type: "timestamp", nullable: true, name: "reset_password_expires" })
  resetPasswordExpires: Date | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  async hashPassword() {
    const salt = await genSalt(8);
    this.password = await hash(this.password, salt);
  }

  @BeforeUpdate()
  async hashPasswordOnUpdate() {
    if (this.tempPassword !== this.password) {
      const salt = await genSalt(8);
      this.password = await hash(this.password, salt);
    }
  }

  generatePasswordReset(): void {
    this.resetPasswordToken = randomBytes(20).toString("hex");
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);

    this.resetPasswordExpires = expiration;
  }

  async generateVerificationToken(): Promise<Token> {
    const token = new Token();
    token.user = this;
    token.token = randomBytes(20).toString("hex");
    token.createdAt = new Date();

    return await token.save();
  }
}
