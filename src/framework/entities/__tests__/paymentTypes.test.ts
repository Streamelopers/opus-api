import {validate} from "class-validator";
import {PaymentTypes} from "../PaymentTypes";

describe("Payment (Entity)", () => {
  describe("Payment validation", () => {
    const payment = new PaymentTypes();

    it("Passed all validations (Payment)", async () => {
      payment.name = "developer";

      const errors = await validate(payment);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Get errors when data is invalid (Payment)", async () => {
      payment.name = "";

      const errors = await validate(payment);

      expect(errors.length).toEqual(1);
    });
  });
});