import {validate} from "class-validator";
import {JobTypes} from "../JobTypes";

describe("Job Type (Entity)", () => {
  describe("Job Type validation", () => {
    const jobType = new JobTypes();

    it("Passed all validations (Job Type)", async () => {
      jobType.name = "developer";

      const errors = await validate(jobType);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Get errors when data is invalid (Job Type)", async () => {
      jobType.name = "";

      const errors = await validate(jobType);

      expect(errors.length).toEqual(1);
    });
  });
});