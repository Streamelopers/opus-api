import { Test, TestingModule } from '@nestjs/testing';
import { JobtypesController } from './jobtypes.controller';
import { JobtypesService } from './jobtypes.service';

describe('JobtypesController', () => {
  let controller: JobtypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobtypesController],
      providers: [JobtypesService],
    }).compile();

    controller = module.get<JobtypesController>(JobtypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
