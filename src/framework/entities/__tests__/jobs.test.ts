import {validate} from "class-validator";
import {Jobs} from "../Jobs";

describe("Job (Entity)", () => {
  describe("Job validation", () => {
    const job = new Jobs();

    it("Passed all validations (Job)", async () => {
      job.minSalary = 10;
      job.maxSalary = 12;
      job.description = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      `;
      job.howToApply = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      `;

      const errors = await validate(job);

      expect(errors).toEqual([]);
      expect(errors.length).toEqual(0);
    });

    it("Catch errors (Job)", async () => {
      job.minSalary = -1;
      job.maxSalary = -1;
      job.description = "";
      job.howToApply = "";
      
      const errors = await validate(job);

      expect(errors.length).toEqual(4);
    });
  });
});