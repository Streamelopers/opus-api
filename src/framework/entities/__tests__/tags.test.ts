import {validate} from "class-validator";
import {Tags} from "../Tags";

describe("Tag (Entity)", () => {
  describe("Tag validation", () => {
    const tag = new Tags();

    it("Passed all validations (Tag)", async () => {
      tag.name = "typescript";

      const errors = await validate(tag);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Get errors when data is invalid (Tag)", async () => {
      tag.name = "";

      const errors = await validate(tag);

      expect(errors.length).toEqual(1);
    });
  });
});