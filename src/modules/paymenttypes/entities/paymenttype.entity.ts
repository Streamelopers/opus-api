import { Entity, Column } from "typeorm";
import { Base } from "@common/entities/base";

@Entity("paymenttypes")
export class Paymenttype extends Base {
  @Column()
  name: string;
}
