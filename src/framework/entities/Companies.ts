import {Entity, Column, OneToOne, JoinColumn} from "typeorm";
import {Length, IsUrl} from "class-validator";
import {Base, Users} from "./index";

@Entity()
export class Companies extends Base {
  @Column()
  @Length(3, 30)
  name: string;

  @Column()
  @IsUrl()
  website: string;

  @Column()
  @Length(20, 150)
  description: string;

  @OneToOne(type => Users)
  @JoinColumn()
  user: Users
}