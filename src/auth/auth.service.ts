import { AuthDto } from './dto/auth.dto';
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(authDto: AuthDto) {
    return {
      accessToken: this.jwtService.sign(authDto),
    };
  }
}
