import {validate, ValidationError} from "class-validator";
import {Currencies} from "../Currencies";

describe("Currency (Entity)", () => {
  describe("Currency validation", () => {
    const currency = new Currencies();

    it("Passed all validations (Currency)", async () => {
      currency.name = "Peso Dominicano";
      currency.symbol = "RD$";
      currency.isoCode = "DOP";

      const errors = await validate(currency);


      expect(errors.length).toEqual(0);
    });

    it("invalid length name (Currency)", async () => {
      currency.name = "";

      const error: ValidationError = (await validate(currency))[0];

      expect(error.property).toEqual("name");
      expect(error.constraints.isLength).toEqual("name must be longer than or equal to 5 characters");
    });

    it("invalid isoCode (Currency)", async () => {
      currency.name = "Peso Dominicano";
      currency.isoCode = "nnnn";

      const error: ValidationError = (await validate(currency))[0];

      expect(error.property).toEqual("isoCode");
      expect(error.constraints.isLength).toEqual("isoCode must be shorter than or equal to 3 characters");
    });
  });
});