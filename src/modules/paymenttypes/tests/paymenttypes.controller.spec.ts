import { Test, TestingModule } from "@nestjs/testing";
import { PaymenttypesController } from "../paymenttypes.controller";
import { PaymenttypesService } from "../paymenttypes.service";

describe("PaymenttypesController", () => {
  let controller: PaymenttypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymenttypesController],
      providers: [PaymenttypesService],
    }).compile();

    controller = module.get<PaymenttypesController>(PaymenttypesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
