import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";

import { GitHubAuthService } from "./github-auth.service";

@Controller("auth/github")
@ApiTags("GitHub Authentication")
export class GitHubAuthController {
  constructor(private readonly gitHubAuthService: GitHubAuthService) {}

  @Get()
  @UseGuards(AuthGuard("github"))
  async autheticate() {
    return true;
  }

  @Get("callback")
  @UseGuards(AuthGuard("github"))
  callback() {
    return this.gitHubAuthService.callback();
  }
}
