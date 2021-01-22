import {Column, Entity} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Tags extends Base {
    @Column()
    name: string;
}
