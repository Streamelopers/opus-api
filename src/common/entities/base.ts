import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", name: "updated_at", default: () => "now()" })
  updatedAt: Date;

  @Column({ type: "date", name: "created_at", default: () => "now()" })
  createdAt: Date;

  @Column({ type: "date", name: "deleted_at", nullable: true })
  deletedAt: Date;
}
