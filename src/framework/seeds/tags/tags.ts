import {Seeder, Factory} from "typeorm-seeding";
import {Connection} from "typeorm";
import {Tags} from "../../entities/Tags";
import {readFileSync} from "fs";

function readTagsFromCSV(): Array<object>{
  // reaf csv file and parsed the data to return a
  // array [{ name: $tag1 }, ...]

  return readFileSync(`${__dirname}/tags.csv`, "utf-8")
    .split("\n")
    .map(tag => ({ name: tag }))
}


export default class CreateTags implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any>{
    const tags: Array<object> = readTagsFromCSV();

    // insert data
    await connection
      .createQueryBuilder()
      .insert()
      .into(Tags)
      .values(tags)
      .execute()
  }
}