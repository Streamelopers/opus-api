import { Module } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { OauthController } from './oauth.controller';

@Module({
  controllers: [OauthController],
  providers: [OauthService]
})
export class OauthModule {}
