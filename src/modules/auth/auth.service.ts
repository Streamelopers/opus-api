import { AuthDto } from "./dto/auth.dto";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenDto } from "./dto/token.dto";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(authDto: AuthDto): Promise<TokenDto> {
    return {
      accessToken: this.jwtService.sign(authDto),
    };
  }
}
