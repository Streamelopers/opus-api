import {getRepository} from "typeorm";
import {User} from "../entities/User";


export default class UserRepository {
    static async create(payload: any): Promise<User> {
        const user = new User();
        user.id= 1;
        user.firstname = payload.firstname;
        user.lastname = payload.lastname;
        user.email = payload.email
        user.password = payload.password;
        return await getRepository(User).create(user);
    }
}



