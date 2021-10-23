import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity("currencies")
export class Currency extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column({ default: "$DOP" })
  symbol: string;

  @Column({ default: "DOP" })
  isoCode: string;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
