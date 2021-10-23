import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Job } from "@modules/jobs/entities";

@Entity({ name: "tags" })
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Job, (job) => job.tags)
  jobs: Job;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
