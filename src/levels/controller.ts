import {Levels} from "../framework/entities/Levels";
import LevelRepository from "./repository";

export default class LevelController {
  static async getPage(payload: any): Promise<Levels[]> {
    return await LevelRepository.getPage(payload);
  }

  static async getById(id: string): Promise<Levels> {
    return await LevelRepository.getById(id);
  }

  static async create(payload: any): Promise<Levels> {
    return await LevelRepository.create(payload);
  }

  static async update(id: string, payload: any): Promise<Levels> {
    const level = await this.getById(id);
    level.name = payload.name;
    console.log(payload.name)
    return await LevelRepository.update(level);
  }

  static async delete(id: string): Promise<boolean> {
    return await LevelRepository.delete(id);
  }
}