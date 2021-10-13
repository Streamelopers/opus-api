import { Entity, Column } from "typeorm";
import { Base } from "@common/entities/base";

@Entity("levels")
export class Level extends Base {
  @Column()
  name: string;
}
