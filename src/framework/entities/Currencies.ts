import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Currencies extends Base {
  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  isoCode: string;
}
