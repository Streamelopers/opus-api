import { Entity, Column } from "typeorm";
import { Base } from "framework/entities/base";

@Entity("payment_types")
export class Paymenttype extends Base {
  @Column()
  name: string;
}
