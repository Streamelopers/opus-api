import { Test, TestingModule } from '@nestjs/testing';
import { OauthCallbackService } from './oauth-callback.service';

describe('OauthCallbackService', () => {
  let service: OauthCallbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthCallbackService],
    }).compile();

    service = module.get<OauthCallbackService>(OauthCallbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
