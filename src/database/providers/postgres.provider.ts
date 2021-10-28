import { writeFileSync, constants, promises } from "fs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConnectionOptions } from "typeorm";
import { dirname } from "path";

import { Environmnet } from "@enums/index";

async function createOrmConfigFile(dbConfig: ConnectionOptions) {
  const path = await getRootDirectory();
  writeFileSync(path + "ormconfig.json", JSON.stringify(dbConfig, null, 2));
}

export const PostgresProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get("NODE_ENV") !== Environmnet.Production;

    const dbConfig = {
      type: "postgres",
      host: config.get("POSTGRES_HOST"),
      username: config.get("POSTGRES_USER"),
      password: config.get("POSTGRES_PASSWORD"),
      port: +config.get("POSTGRES_PORT"),
      database: config.get("POSTGRES_DB"),
      autoLoadEntities: true,
      synchronize: isDevelopmentEnv,
      migrations: ["dist/database/migrations/*.js"],
      cli: {
        migrationsDir: "database/migrations",
      },
    } as ConnectionOptions;

    if (isDevelopmentEnv) {
      await createOrmConfigFile(dbConfig);
    }

    return dbConfig;
  },
});

async function getRootDirectory() {
  for (const path of module.paths) {
    try {
      const prospectivePkgJsonDir = dirname(path);

      await promises.access(path, constants.F_OK);

      return prospectivePkgJsonDir;
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }
}
