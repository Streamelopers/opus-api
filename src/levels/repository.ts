import {getRepository} from "typeorm";
import {Levels} from "../framework/entities/Levels";

export default class TagRepository {
  static async create(payload: any): Promise<Levels> {
    const level = new Levels();
    level.name = payload.name;
    await getRepository(Levels).insert(level);

    return level;
  }

  static async getPage(payload: any): Promise<Levels[]> {
    return await getRepository(Levels).find({
      skip: payload.page * payload.pageSize,
      take: payload.pageSize
    });
  }

  static async getById(id: string) : Promise<Levels>{
    return await getRepository(Levels).findOne(id);
  }

  static async update(level: Levels): Promise<Levels> {
    await getRepository(Levels).update(level.id, level);

    return level;
  }

  static async delete(id: string): Promise<boolean> {
    await getRepository(Levels).delete(id);

    return true;
  }
}