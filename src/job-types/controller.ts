import { JobTypes } from "../framework/entities";
import JobTypeRepository from "./repository";

export default class CurrencyController {
  static async getPage(payload: any): Promise<JobTypes[]> {
    return await JobTypeRepository.getPage(payload);
  }

  static async getById(id: string): Promise<JobTypes> {
    return await JobTypeRepository.getById(id);
  }

  static async create(payload: any): Promise<JobTypes> {
    return await JobTypeRepository.create(payload);
  }

  static async update(id: string, payload: any): Promise<JobTypes> {
    const jobType = await this.getById(id);
    jobType.name = payload.name;
    return await JobTypeRepository.update(jobType);
  }

  static async delete(id: string): Promise<boolean> {
    return await JobTypeRepository.delete(id);
  }
}