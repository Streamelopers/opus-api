import { HttpModule, Module } from '@nestjs/common';
import { OauthCallbackService } from './oauth-callback.service';
import { OauthCallbackController } from './oauth-callback.controller';

@Module({
  imports: [HttpModule],
  controllers: [OauthCallbackController],
  providers: [OauthCallbackService]
})
export class OauthCallbackModule {}
