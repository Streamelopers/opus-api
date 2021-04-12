import { Base } from "../../../framework/entities/base";
import { Entity, Column } from "typeorm";

@Entity("tags")
export class Tag extends Base {
  @Column()
  name: string;
}
