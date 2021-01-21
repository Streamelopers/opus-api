import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export abstract class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isActive: boolean;
}