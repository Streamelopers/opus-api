import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = { email: user.email, userId: user.userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
