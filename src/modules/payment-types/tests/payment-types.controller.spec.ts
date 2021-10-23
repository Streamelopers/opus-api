import { Test, TestingModule } from "@nestjs/testing";

import { PaymentTypesController } from "../payment-types.controller";
import { PaymentTypesService } from "../payment-types.service";

describe("PaymenttypesController", () => {
  let controller: PaymentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentTypesController],
      providers: [PaymentTypesService],
    }).compile();

    controller = module.get<PaymentTypesController>(PaymentTypesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
