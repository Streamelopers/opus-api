import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "payment_types" })
export class PaymentType extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
