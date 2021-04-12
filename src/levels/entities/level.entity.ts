import { Entity, Column } from "typeorm";
import { Base } from "../../../framework/entities/base";

@Entity("levels")
export class Level extends Base {
  @Column()
  name: string;
}
