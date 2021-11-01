import {
  AfterLoad,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { genSaltSync, hashSync } from "bcrypt";
import { randomBytes } from "crypto";

import { User } from "@modules/users/entities";
import { Identities } from "../enums";

@Entity({ name: "identities" })
export class Identity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.identities, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @Column({ type: "enum", enum: Identities })
  identity: Identities;

  @Column({ length: 50, unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  password: string;

  private tempPassword: string;

  @Column({
    nullable: false,
    default: false,
    name: "is_verified",
  })
  isVerified: boolean;

  @Column({ name: "auth_token", nullable: true })
  accessToken: string;

  @Column({ name: "refresh_token", nullable: true })
  refreshToken: string;

  @Column({ nullable: true, name: "verification_token" })
  verificationToken: string;

  @Column({ nullable: true, name: "reset_password_token" })
  resetPasswordToken: string;

  @Column({
    type: "timestamp",
    nullable: true,
    name: "reset_password_token_expiration",
  })
  resetPasswordTokenExpiration: Date;

  @Column({ type: "timestamp", nullable: true, name: "activation_date" })
  activationDate: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  hashPassword(): void {
    if (this.password) {
      const salt = genSaltSync(8);
      this.password = hashSync(this.password, salt);
    }
  }

  @BeforeUpdate()
  hashPasswordOnUpdate(): void {
    const isPasswordChange =
      this.tempPassword && this.tempPassword !== this.password;

    if (isPasswordChange) {
      const salt = genSaltSync(8);
      this.password = hashSync(this.password, salt);
    }
  }

  async generatePasswordReset(): Promise<void> {
    const ONE_DAY_HOURS = 24;

    this.resetPasswordToken = this.generateHash();

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + ONE_DAY_HOURS);

    this.resetPasswordTokenExpiration = expiration;

    await this.save();
  }

  async generateVerificationToken(): Promise<string> {
    const token = this.generateHash();
    this.verificationToken = token;

    await this.save();

    return token;
  }

  generateHash(): string {
    return randomBytes(20).toString("hex");
  }
}
