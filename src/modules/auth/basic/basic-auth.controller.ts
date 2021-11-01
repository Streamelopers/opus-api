import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Query,
  Req,
} from "@nestjs/common";
import { ApiBasicAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

import {
  SignUpDto,
  SignInResponseDto,
  SignInDto,
  RecoverPasswordDto,
  ResetPasswordDto,
} from "./dtos";
import { BasicAuthService } from "./basic-auth.service";
import { JwtPayload } from "../common/interfaces";

@Controller("auth")
@ApiTags("Basic Authentication")
export class BasicAuthController {
  constructor(private readonly authenticationService: BasicAuthService) {}

  @Post("/signup")
  async signUp(@Body() signupDto: SignUpDto): Promise<{ message: string }> {
    return this.authenticationService.signUp(signupDto);
  }

  @Post("/signin")
  async signIn(@Body() signinDto: SignInDto): Promise<SignInResponseDto> {
    return this.authenticationService.signIn(signinDto);
  }

  @Get("me")
  @UseGuards(AuthGuard())
  @ApiBasicAuth("access-token")
  me(@Req() request: Request): JwtPayload {
    const { id, name, email, identity } = request.user as JwtPayload;

    return {
      id,
      name,
      email,
      identity,
    };
  }

  @Get("validation")
  validateEmail(@Query("email") email: string): Promise<{ isValid: boolean }> {
    return this.authenticationService.validateEmail(email);
  }

  @Get("verify")
  verifyAccount(
    @Query("token") token: string,
    @Query("email") email: string
  ): Promise<{ message: string }> {
    return this.authenticationService.verifyAccount({ email, token });
  }

  @Post("resend")
  resendToken(@Body("email") email: string): Promise<{ message: string }> {
    return this.authenticationService.resendToken(email);
  }

  @Post("recover")
  recover(
    @Body() revoverPasswordDto: RecoverPasswordDto
  ): Promise<{ message: string }> {
    return this.authenticationService.recoverPassword(revoverPasswordDto.email);
  }

  @Post("reset")
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<void> {
    return this.authenticationService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.password
    );
  }
}
