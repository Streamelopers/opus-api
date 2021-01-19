import {getRepository} from "typeorm";
import {User} from "../framework/entities/User";

export default class UserRepository {
    static async create(payload: any): Promise<User> {
        const user = new User();
        user.firstname = payload.firstname;
        user.lastname = payload.lastname;
        user.email = payload.email
        user.password = payload.password;
        return await getRepository(User).create(user);
    }

    static async getByCredentials(email:string, password: string) : Promise<User>{
        return await getRepository(User).findOne({ email, password });
    }
}



