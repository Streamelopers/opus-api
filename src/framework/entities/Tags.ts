import {Column, Entity} from "typeorm";
import {Length} from "class-validator";
import {Base} from "./Base";

@Entity()
export class Tags extends Base {
    @Column()
    @Length(5, 20)
    name: string;
}
