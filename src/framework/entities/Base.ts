import {PrimaryGeneratedColumn, Column} from "typeorm";

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: "date", default: () => "NOW()" })
  updatedAt: Date;

  @Column({ type: "date", default: () => "NOW()"})
  createdAt: Date;

  @Column({ type: "date", nullable: true })
  deletedAt: Date;
}