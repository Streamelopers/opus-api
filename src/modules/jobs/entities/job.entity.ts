import {
  Entity,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
} from "typeorm";

import { PaymentType } from "@modules/payment-types/entities";
import { Currency } from "@modules/currencies/entities";
import { Location } from "@modules/locations/entities";
import { Company } from "@modules/companies/entities";
import { JobType } from "@modules/job-types/entities";
import { Level } from "@modules/levels/entities";
import { User } from "@modules/users/entities";
import { Tag } from "@modules/tags/entities";

@Entity({ name: "jobs" })
export class Job extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: "how_to_apply" })
  howToApply: string;

  @Column({ name: "max_salary" })
  maxSalary: number;

  @Column({ name: "min_salary" })
  minSalary: number;

  @Column({ name: "is_remote" })
  isRemote: boolean;

  @Column({ name: "application_target " })
  applicationTarget: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @OneToOne(() => Level)
  @JoinColumn()
  level: Level;

  @OneToOne(() => JobType)
  @JoinColumn()
  jobtype: JobType;

  @OneToOne(() => Currency)
  @JoinColumn()
  currency: Currency;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @OneToOne(() => PaymentType)
  @JoinColumn()
  paymenttype: PaymentType;

  @OneToMany(() => Tag, (tag) => tag.jobs)
  @JoinTable({ name: "job_tags" })
  tags: Tag[];

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
