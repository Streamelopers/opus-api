import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Query,
  Render,
} from "@nestjs/common";
import { AuthenticationService } from "./auth.service";
import { SignUpDto, LoggedInDto, SignInDto, CreatedAccountDto } from "./dtos";
import { AuthGuard } from "@nestjs/passport";
import { CurrentUser } from "./decorators";
import { ApiTags } from "@nestjs/swagger";

@Controller("auth")
@ApiTags("Authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("/signup")
  async signup(@Body() signupDto: SignUpDto): Promise<CreatedAccountDto> {
    return this.authenticationService.signup(signupDto);
  }

  @Post("/signin")
  async signin(@Body() signinDto: SignInDto): Promise<LoggedInDto> {
    return this.authenticationService.signin(signinDto);
  }

  @Get("me")
  @UseGuards(AuthGuard())
  me(@CurrentUser("id") userId: number): Promise<LoggedInDto> {
    return this.authenticationService.me(userId);
  }

  @Get("validation")
  validateEmail(@Query("email") email: string) {
    return this.authenticationService.validateEmail(email);
  }

  @Get("verify")
  verify(@Query("token") token: string) {
    return this.authenticationService.verify(token);
  }

  @Post("resend")
  resendToken(@Body("email") email: string) {
    return this.authenticationService.resendToken(email);
  }

  @Post("recover")
  recover(@Body("email") email: string) {
    return this.authenticationService.recoverPassword(email);
  }

  @Get("reset")
  @Render("reset")
  async reset(@Query("token") token: string) {
    await this.authenticationService.reset(token);
  }

  @Post("reset")
  resetPassword(
    @Query("token") token: string,
    @Body("password") password: string
  ) {
    return this.authenticationService.resetPassword(token, password);
  }
}
