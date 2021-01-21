import {Entity, Column, OneToOne, JoinColumn} from "typeorm";
import {Base} from "./Base";
import {Users} from "./Users";

@Entity()
export class Companies extends Base {
  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  description: string;

  @OneToOne(type => Users)
  @JoinColumn()
  user: Users
}