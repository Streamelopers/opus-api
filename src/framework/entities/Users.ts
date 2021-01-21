import {Entity, Column} from "typeorm";
import {Base} from "./Base";
@Entity()
export class Users extends Base {
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
