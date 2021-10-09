import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OauthCallbackService } from './oauth-callback.service';
import { CreateOauthCallbackDto } from './dto/create-oauth-callback.dto';
import { UpdateOauthCallbackDto } from './dto/update-oauth-callback.dto';

@Controller('oauth-callback')
export class OauthCallbackController {
  constructor(private readonly oauthCallbackService: OauthCallbackService) {}

  @Get()
  oauthCallback(@Query() query: []) {
    const response = this.oauthCallbackService.getAccessToken(query["code"]);
    return response;
  }

}
