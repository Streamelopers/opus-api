import {validate, ValidationError} from "class-validator";
import {Companies} from "../Companies";

describe("Company (Entity)", () => {
  const company = new Companies();
  
  it("Passed all validations (Company)", async () => {
    company.name = "Github";
    company.website = "https://github.com/";
    company.description = "lorem lorem lorem lorem lorem lorem lorem";

    const errors = await validate(company);

    expect(errors).toEqual([]);
    expect(errors.length).toEqual(0);
  });

  it("Catch errors (Company)", async () => {
    company.name = "";
    company.website = "";
    company.description = "";

    const errors = await validate(company);

    expect(errors.length).toEqual(3);
  });

  it("Catch error with invalid URL", async () => {
    company.name = "Github";
    company.website = "nada";
    company.description = "lorem lorem lorem lorem lorem lorem lorem";

    const errors = await validate(company);
    const error: ValidationError = errors[0];

    expect(errors.length).toEqual(1);
    expect(error.property).toEqual("website");
    expect(error.constraints.isUrl).toEqual("website must be an URL address");
  });
});