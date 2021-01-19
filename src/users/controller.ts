import { User } from '../framework/entities/User';
import { LoginResult } from '../framework/dto/LoginResult';
import UserRepository from './repository';

export default class UserController 
{
    static async create(payload: any): Promise<User> {
        const { email, firstname, lastname, password } = payload;
        return await UserRepository.create(payload);
    }
    static async signup(payload: any): Promise<User> {
        const { email, firstname, lastname, password } = payload; 
        let saltedPassword = process.env.OPUS_SALT + password;
        
        return await UserRepository.create(payload);
    }
    static async login(payload:any): Promise<LoginResult> {
        const { email, password } = payload;
        
        let saltedPassword = process.env.OPUS_SALT + password;
        //TODO Encrypt password before passing it to function
        let userResult = await UserRepository.getByCredentials(email, saltedPassword); 
        return null;
    }
}