import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import { Repository, Like } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { QueryParams } from "../../framework/utils/query";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto.password = hash;
    await this.userRepository.insert(createUserDto);

    return createUserDto;
  }

  findAll(query: QueryParams): Promise<User[]> {
    return this.userRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        firstName: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<UpdateUserDto> {
    await this.userRepository.update(id, updateUserDto);

    return updateUserDto;
  }

  async remove(id: number): Promise<string> {
    await this.userRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "El usuario fue desactivado correctamente";
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      email,
    });
  }
}
