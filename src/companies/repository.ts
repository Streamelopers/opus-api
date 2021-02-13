import {getRepository, UpdateResult} from "typeorm";
import {Companies} from "../framework/entities";

export default class CompanyRepository {
  static async create(payload: CompanyPayload): Promise<Companies> {
    const company = new Companies();
    company.name = payload.name;
    company.website = payload.website;
    company.description = payload.description;
    company.user.id = payload.userId;
    await getRepository(Companies).insert(company);

    return company;
  }

  static async getPage(payload: any): Promise<Companies[]> {
    return await getRepository(Companies).find({
      skip: payload.page * payload.pageSize,
      take: payload.pageSize
    });
  }

  static async getById(id: string) : Promise<Companies>{
    return await getRepository(Companies).findOne(id);
  }

  static async update(company: Companies): Promise<UpdateResult> {
    return await getRepository(Companies).update(company.id, company);
  }

  static async delete(id: string): Promise<boolean> {
    const deleted = await getRepository(Companies).delete(id);

    return deleted.affected > 0;
  }
}