import { Currencies } from "../framework/entities";
import CurrencyRepository from "./repository";

export default class CurrencyController {
  static async getPage(payload: any): Promise<Currencies[]> {
    return await CurrencyRepository.getPage(payload);
  }

  static async getById(id: string): Promise<Currencies> {
    return await CurrencyRepository.getById(id);
  }

  static async create(payload: any): Promise<Currencies> {
    return await CurrencyRepository.create(payload);
  }

  static async update(id: string, payload: any): Promise<Currencies> {
    const currency = await this.getById(id);
    currency.name = payload.name;
    currency.isoCode = payload.isoCode;
    currency.symbol = payload.symbol;
    return await CurrencyRepository.update(currency);
  }

  static async delete(id: string): Promise<boolean> {
    return await CurrencyRepository.delete(id);
  }
}