import {Column, Entity} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Locations extends Base {
    @Column()
    name: string;

    @Column()
    lat: string;

    @Column()
    lon: string;
}
