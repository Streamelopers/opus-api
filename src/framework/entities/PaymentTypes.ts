import {Entity, Column} from "typeorm";
import {Length} from "class-validator";
import {Base} from "./Base";

@Entity()
export class PaymentTypes extends Base {
  @Column()
  @Length(5, 20)
  name: string;
}