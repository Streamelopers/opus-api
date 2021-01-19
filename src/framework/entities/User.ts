import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
