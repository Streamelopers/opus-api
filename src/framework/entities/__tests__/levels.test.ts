import {validate} from "class-validator";
import {Levels} from "../Levels";

describe("Level (Entity)", () => {
  describe("Level validation", () => {
    const level = new Levels();

    it("Passed all validations (Level)", async () => {
      level.name = "master";

      const errors = await validate(level);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Get errors when data is invalid (Level)", async () => {
      level.name = "";

      const errors = await validate(level);

      expect(errors.length).toEqual(1);
    });
  });
});