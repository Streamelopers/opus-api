import { Entity, Column } from "typeorm";
import { Base } from "framework/entities/base";

@Entity("paymenttypes")
export class Paymenttype extends Base {
  @Column()
  name: string;
}
