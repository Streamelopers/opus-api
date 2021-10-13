import { Entity, Column } from "typeorm";
import { Base } from "@common/entities/base";

@Entity("currencies")
export class Currency extends Base {
  @Column()
  name: string;

  @Column({ default: "$DOP" })
  symbol: string;

  @Column({ default: "DOP" })
  isCode: string;
}
