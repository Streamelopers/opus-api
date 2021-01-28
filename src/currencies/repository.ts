import {getRepository} from "typeorm";
import {Currencies} from "../framework/entities";

export default class CurrencyRepository {
  static async create(payload: any): Promise<Currencies> {
    const currency = new Currencies();
    currency.name = payload.name;
    currency.isoCode = payload.isoCode;
    currency.symbol = payload.symbol;
    await getRepository(Currencies).insert(currency);

    return currency;
  }

  static async getPage(payload: any): Promise<Currencies[]> {
    return await getRepository(Currencies).find({
      skip: payload.page * payload.pageSize,
      take: payload.pageSize
    });
  }

  static async getById(id: string) : Promise<Currencies>{
    return await getRepository(Currencies).findOne(id);
  }

  static async update(currency: Currencies): Promise<Currencies> {
    const updated = await getRepository(Currencies).update(currency.id, currency);
    if (updated.affected > 0) return currency;
  }

  static async delete(id: string): Promise<boolean> {
    const deleted = await getRepository(Currencies).delete(id);
    if (deleted.affected > 0) return true;
    return false;
  }
}