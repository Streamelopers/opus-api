import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { SignUpDto } from "@modules/auth/dtos";
import { UpdateUserDto } from "./dtos";
import { User } from "./entities";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findOne(userId: number): Promise<User> {
    if (!userId) {
      throw new BadRequestException("User Id must be sent");
    }

    const user: User = await this.userRepository.findOne(userId);

    if (!user) {
      throw new NotFoundException("User does not exist");
    }

    return user;
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(signupDto: SignUpDto): Promise<User> {
    const { name, lastname, username, email, password } = signupDto;

    const user = new User();
    user.name = name;
    user.lastname = lastname;
    user.username = username;
    user.email = email;
    user.password = password;

    return await user.save();
  }

  async update(userId: number, user: Partial<UpdateUserDto>): Promise<User> {
    const updatedUser = await this.userRepository.preload({
      id: userId,
      ...user,
    });

    if (!updatedUser) {
      throw new NotFoundException("User does not exists");
    }

    return updatedUser;
  }

  async remove(userId: number): Promise<void> {
    const foundUser = await this.findOne(userId);

    if (!foundUser) {
      throw new NotFoundException("User does not exist");
    }

    await this.userRepository.delete(userId);
  }

  async getUserByEmailOrUsername(
    username?: string,
    email?: string
  ): Promise<User> {
    return await this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }
}
