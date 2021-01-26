import {Column, Entity} from "typeorm";
import {Length, IsLatitude, IsLongitude} from "class-validator";
import {Base} from "./Base";

@Entity()
export class Locations extends Base {
    @Column()
    @Length(5, 50)
    name: string;

    @Column()
    @IsLatitude()
    latitude: string;

    @Column()
    @IsLongitude()
    longitude: string;
}
