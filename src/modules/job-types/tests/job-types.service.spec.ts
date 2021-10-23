import { Test, TestingModule } from "@nestjs/testing";

import { JobTypesService } from "../job-types.service";

describe("JobTypesService", () => {
  let service: JobTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobTypesService],
    }).compile();

    service = module.get<JobTypesService>(JobTypesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
