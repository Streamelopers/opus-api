import {Entity, Column} from "typeorm";
import {Length, IsCurrency} from "class-validator";
import {Base} from "./Base";

@Entity()
export class Currencies extends Base {
  @Column()
  @Length(5, 20)
  name: string;

  @Column({ default: "RD$" })
  symbol: string;

  @Column({ default: "DOP" })
  @Length(3, 3)
  isoCode: string;
}
