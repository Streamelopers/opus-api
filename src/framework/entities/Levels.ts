import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Levels extends Base {
  @Column()
  name: string;
}
