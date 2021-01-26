import { exec } from "child_process";
import {validate} from "class-validator";
import {Locations} from "../Locations";

describe("Location (Entity)", () => {
  describe("Location validation", () => {
    const location = new Locations();

    it("Passed all validations (Location)", async () => {
      location.name = "alguna parte del mundo";
      location.latitude = "-19.89320373000001";
      location.longitude = "98.539825434999997";

      const errors = await validate(location);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Get errors when data is invalid (Location)", async () => {
      location.name = "";
      location.latitude = "";
      location.longitude = "";

      const errors = await validate(location);

      expect(errors.length).toEqual(3);
    });
  });
});