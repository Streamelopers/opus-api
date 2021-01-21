import {PrimaryGeneratedColumn, Column} from "typeorm";

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isActive: boolean;

  @Column({ type: "date" })
  updatedAt: Date;

  @Column({ type: "date" })
  createdAt: Date;

  @Column({ type: "date" })
  deletedAt: Date;
}