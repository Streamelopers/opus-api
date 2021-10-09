import { Test, TestingModule } from '@nestjs/testing';
import { OauthCallbackController } from './oauth-callback.controller';
import { OauthCallbackService } from './oauth-callback.service';

describe('OauthCallbackController', () => {
  let controller: OauthCallbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthCallbackController],
      providers: [OauthCallbackService],
    }).compile();

    controller = module.get<OauthCallbackController>(OauthCallbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
