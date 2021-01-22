import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class PaymentTypes extends Base {
  @Column()
  name: string;
}