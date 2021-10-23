import { Test, TestingModule } from "@nestjs/testing";

import { PaymentTypesService } from "../payment-types.service";

describe("PaymentTypesService", () => {
  let service: PaymentTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentTypesService],
    }).compile();

    service = module.get<PaymentTypesService>(PaymentTypesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
