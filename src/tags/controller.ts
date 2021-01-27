import {Tags} from "../framework/entities/Tags";
import TagRepository from "./repository";

export default class TagController {
  static async getPage(payload: any): Promise<Tags[]> {
    return await TagRepository.getPage(payload);
  }

  static async getById(id: string): Promise<Tags> {
    return await TagRepository.getById(id);
  }

  static async create(payload: any): Promise<Tags> {
    return await TagRepository.create(payload);
  }

  static async update(id: string, payload: any): Promise<Tags> {
    const tag = await this.getById(id);
    tag.name = payload.firstname;
    return await TagRepository.update(tag);
  }

  static async delete(id: string): Promise<boolean> {
    return await TagRepository.delete(id);
  }
}