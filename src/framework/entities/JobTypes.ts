import {Column, Entity} from "typeorm";
import {Base} from "./Base";

@Entity()
export class JobTypes extends Base {
  @Column()
  name: string;
}
