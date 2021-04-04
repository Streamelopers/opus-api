import {getRepository} from "typeorm";
import {Users} from "../framework/entities/Users";

export default class UserRepository {
    static async create(payload: any): Promise<Users> {
        const user = new Users();
        user.firstname = payload.firstname;
        user.lastname = payload.lastname;
        user.email = payload.email
        user.password = payload.password;
        await getRepository(Users).insert(user);
        return user;
    }

    static async getByCredentials(email:string, password: string) : Promise<Users>{
        return await getRepository(Users).findOne({ email, password });
    }

    static async getPage(payload): Promise<Users[]> {
        return await getRepository(Users).find({
            skip: payload.page * payload.pageSize,
            take: payload.pageSize
        });
    }

    static async getById(id: string) : Promise<Users>{
        return await getRepository(Users).findOne(id);
    }

    static async getByEmail(email: string): Promise<Users> {
        return await getRepository(Users).findOne({ email });
    }

    static async update(user: Users): Promise<Users> {
        const updated = await getRepository(Users).update(user.id, user);
        if (updated.affected > 0) {
            return user;
        }
    }

    static async delete(id: string): Promise<boolean> {
        const deleted = await getRepository(Users).delete(id);
        if (deleted.affected > 0) {
            return true;
        }
        return false;
    }
}



