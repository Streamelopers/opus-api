import { Test, TestingModule } from '@nestjs/testing';
import { PaymenttypesService } from './paymenttypes.service';

describe('PaymenttypesService', () => {
  let service: PaymenttypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymenttypesService],
    }).compile();

    service = module.get<PaymenttypesService>(PaymenttypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
