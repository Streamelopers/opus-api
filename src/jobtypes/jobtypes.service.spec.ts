import { Test, TestingModule } from '@nestjs/testing';
import { JobtypesService } from './jobtypes.service';

describe('JobtypesService', () => {
  let service: JobtypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobtypesService],
    }).compile();

    service = module.get<JobtypesService>(JobtypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
