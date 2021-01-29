import {getRepository} from "typeorm";
import {JobTypes} from "../framework/entities";

export default class JobTypeRepository {
  static async create(payload: any): Promise<JobTypes> {
    const jobType = new JobTypes();
    jobType.name = payload.name;
    await getRepository(JobTypes).insert(jobType);

    return jobType;
  }

  static async getPage(payload: any): Promise<JobTypes[]> {
    return await getRepository(JobTypes).find({
      skip: payload.page * payload.pageSize,
      take: payload.pageSize
    });
  }

  static async getById(id: string) : Promise<JobTypes>{
    return await getRepository(JobTypes).findOne(id);
  }

  static async update(jobType: JobTypes): Promise<JobTypes> {
    const updated = await getRepository(JobTypes).update(jobType.id, jobType);
    if (updated.affected > 0) return jobType;
  }

  static async delete(id: string): Promise<boolean> {
    const deleted = await getRepository(JobTypes).delete(id);
    if (deleted.affected > 0) return true;
    return false;
  }
}