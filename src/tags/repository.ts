import {getRepository} from "typeorm";
import {Tags} from "../framework/entities/Tags";

export default class TagRepository {
  static async create(payload: any): Promise<Tags> {
    const tag = new Tags();
    tag.name = payload.name;
    await getRepository(Tags).insert(tag);

    return tag;
  }

  static async getPage(payload: any): Promise<Tags[]> {
    return await getRepository(Tags).find({
      skip: payload.page * payload.pageSize,
      take: payload.pageSize
    });
  }

  static async getById(id: string) : Promise<Tags>{
    return await getRepository(Tags).findOne(id);
  }

  static async update(tag: Tags): Promise<Tags> {
    const updated = await getRepository(Tags).update(tag.id, tag);
    if (updated.affected > 0) return tag;
  }

  static async delete(id: string): Promise<boolean> {
    const deleted = await getRepository(Tags).delete(id);
    if (deleted.affected > 0) return true;
    return false;
  }
}