import { Users } from '../framework/entities/Users';
import { LoginResult } from '../framework/dto/LoginResult';
import UserRepository from './repository';
import crypto from 'crypto';
import JWT from 'jsonwebtoken';
export default class UserController 
{

    static async login(payload:any): Promise<LoginResult> {
        const { email, password } = payload;

        const hash = crypto.createHmac('sha512', process.env.OPUS_SALT); /** Hashing algorithm sha512 */
        hash.update(password);
        const saltedPassword = hash.digest('hex');

        const userResult = await UserRepository.getByCredentials(email, saltedPassword); 

        if (userResult.id === undefined) {
            throw "Wrong email or password";
        }
        
        const sessionToken = JWT.sign({id: userResult.id}, process.env.OPTUS_JWT_KEY, { expiresIn: '1h' });

        return {
            email,
            name: `${userResult.firstname} ${userResult.lastname}`,
            jwt: sessionToken,
        }
    }

    static async signup(payload: any): Promise<Users> {
        const { password } = payload; 
        const hash = crypto.createHmac('sha512', process.env.OPUS_SALT); /** Hashing algorithm sha512 */
        hash.update(password);
        const saltedPassword = hash.digest('hex');

        const user = {...payload, password: saltedPassword};
        
        return await UserRepository.create(user);
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