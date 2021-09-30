import { TypeOrmModule } from "@nestjs/typeorm";
import { DynamicModule } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConnectionOptions } from "typeorm";
import { writeFileSync } from "fs";
import { join } from "path";

import { Environmnet } from "framework/enums";

async function createOrmConfigFile(dbConfig: ConnectionOptions) {
  const path = join(__dirname, "../../");
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
        migrationsDir: "src/database/migrations",
      },
      extra: {
        ssl: !isDevelopmentEnv,
        rejectUnauthorized: false,
      },
    } as ConnectionOptions;

    if (isDevelopmentEnv) {
      createOrmConfigFile(dbConfig);
    }

    return dbConfig;
  },
});
