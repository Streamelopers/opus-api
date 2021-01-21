import { Users } from '../framework/entities/Users';
import { LoginResult } from '../framework/dto/LoginResult';
import UserRepository from './repository';

export default class UserController 
{

    static async login(payload:any): Promise<LoginResult> {
        const { email, password } = payload;
        
        let saltedPassword = process.env.OPUS_SALT + password;
        //TODO Encrypt password before passing it to function
        let userResult = await UserRepository.getByCredentials(email, saltedPassword); 
        return null;
    }

    static async signup(payload: any): Promise<Users> {
        const { email, firstname, lastname, password } = payload; 
        let saltedPassword = process.env.OPUS_SALT + password;
        
        return await UserRepository.create(payload);
    }

    static async getPage(payload: any): Promise<Users[]> {
        return await UserRepository.getPage(payload);
    }

    static async getById(id: string): Promise<Users> {
        return await UserRepository.getById(id);
    }

    static async create(payload: any): Promise<Users> {
        return await UserRepository.create(payload);
    }

    static async update(id: string, payload: any): Promise<Users> {
        const getUser = await this.getById(id);
        getUser.firstname = payload.firstname;
        getUser.lastname = payload.lastname;
        return await UserRepository.update(getUser);
    }

    static async delete(id: string): Promise<boolean> {
        return await UserRepository.delete(id);
    }
}