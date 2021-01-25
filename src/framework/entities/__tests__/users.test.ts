import {validate, ValidationError} from "class-validator";
import {Users} from "../Users";

describe("User (Entity)", () => {
  describe("User validation", () => {
    const user = new Users();

    it("Passed all validations (User)", async () => {
      user.firstname = "Test";
      user.lastname = "Simple";
      user.email = "test@gmail.com";
      user.password = "12345678ALPHA";
      
      const errors = await validate(user);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Catch errors (User)", async () => {
      user.firstname = "";
      user.lastname = "";
      user.email = "";
      user.password = "";

      const errors = await validate(user);

      expect(errors.length).toEqual(4);
    });

    it("Catch error with invalid email (User)", async () => {
      user.firstname = "Test";
      user.lastname = "Simple";
      user.email = "error";
      user.password = "12345678ALPHA";

      const errors = await validate(user);
      const error = errors[0];

      expect(errors.length).toEqual(1);
      expect(error.property).toEqual("email");
      expect(error.constraints.isEmail).toEqual("email must be an email");
    });

    it("Catch error with invalid password (User)", async () => {
      user.firstname = "Test";
      user.lastname = "Simple";
      user.email = "test@gmail.com";
      user.password = "";

      const errors = await validate(user);
      const error: ValidationError = errors[0];

      expect(errors.length).toEqual(1);
      expect(error.property).toEqual("password");
      expect(error.constraints.isAlphanumeric).toEqual("password must contain only letters and numbers");
      expect(error.constraints.minLength).toEqual("password must be longer than or equal to 8 characters");
    });
  });
});