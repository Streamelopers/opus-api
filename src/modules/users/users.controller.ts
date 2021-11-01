import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/common/guards/auth.guard";
import { ApiTags, ApiBasicAuth } from "@nestjs/swagger";

import { ResponseInterceptor } from "@interceptors/response.interceptor";
import { TransformInterceptor } from "@interceptors/index";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ResponseUserDto } from "./dtos";

@ApiTags("Users")
@Controller("users")
@UseInterceptors(ResponseInterceptor)
@ApiBasicAuth("access-token")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @UseInterceptors(new TransformInterceptor(ResponseUserDto))
  findAll(): Promise<User[]> {
    return this.usersService.find();
  }

  // @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @UseInterceptors(new TransformInterceptor(ResponseUserDto))
  findOne(@Param("id") id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  // @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @UseInterceptors(new TransformInterceptor(ResponseUserDto))
  update(
    @Param("id") id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<ResponseUserDto> {
    return this.usersService.update(id, updateUserDto);
  }

  // @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
