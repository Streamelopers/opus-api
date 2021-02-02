import { Companies } from "../framework/entities";
import CompanyRepository from "./repository";

export default class CompanyController {
  static async getPage(payload: any): Promise<Companies[]> {
    return await CompanyRepository.getPage(payload);
  }

  static async getById(id: string): Promise<Companies> {
    return await CompanyRepository.getById(id);
  }

  static async create(payload: any): Promise<Companies> {
    return await CompanyRepository.create(payload);
  }

  static async update(id: string, payload: any): Promise<Companies> {
    const company = await this.getById(id);
    company.name = payload.name;
    company.website = payload.website;
    company.description = payload.description;
    company.user.id = payload.userId;
    return await CompanyRepository.update(company);
  }

  static async delete(id: string): Promise<boolean> {
    return await CompanyRepository.delete(id);
  }
}