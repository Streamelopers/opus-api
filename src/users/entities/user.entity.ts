import {PrimaryGeneratedColumn, Entity, Column} from "typeorm";
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @Column({ type: "date", default: () => "date('now')" })
  updatedAt: Date;

  @Column({ type: "date", default: () => "date('now')"})
  createdAt: Date;

  @Column({ type: "date", nullable: true })
  deletedAt: Date;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}