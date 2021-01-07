import { User } from '../entities/User';
import UserRepository from './repository';

export default class UserController {

    static async create(payload: any): Promise<User> {
        const { email, firstname, lastname, password } = payload;
        return await UserRepository.create(payload);
    }

}