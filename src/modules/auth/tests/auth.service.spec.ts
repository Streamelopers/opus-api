import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "../auth.service";
import { JwtStrategy } from "../strategies/jwt.strategy";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_KEY,
          signOptions: { expiresIn: "60s" },
        }),
      ],
      providers: [AuthService, JwtStrategy],
    }).compile();

    service = moduleRef.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return JWT object when credentials are valid", async () => {
    const res = await service.login({ email: "maria", userId: 3 });
    expect(res.accessToken).toBeDefined();
  });
});
