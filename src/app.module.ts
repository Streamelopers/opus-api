import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";

import { PaymenttypesModule } from "@modules/paymenttypes/paymenttypes.module";
import { CurrenciesModule } from "@modules/currencies/currencies.module";
import { LocationsModule } from "@modules/locations/locations.module";
import { CompaniesModule } from "@modules/companies/companies.module";
import { JobtypesModule } from "@modules/jobtypes/jobtypes.module";
import { PicturesModule } from "@modules/pictures/pictures.module";
import { LevelsModule } from "@modules/levels/levels.module";
import { DatabaseModule } from "@database/database.module";
import { UsersModule } from "@modules/users/users.module";
import { JobsModule } from "@modules/jobs/jobs.module";
import { TagsModule } from "@modules/tags/tags.module";
import { AuthModule } from "@modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    CompaniesModule,
    CurrenciesModule,
    JobsModule,
    TagsModule,
    PicturesModule,
    LevelsModule,
    JobtypesModule,
    LocationsModule,
    PaymenttypesModule,
  ],
})
export class AppModule {
  static apiVersion: string;
  static applicationPort: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.apiVersion = this.configService.get("API_VERSION");
    AppModule.applicationPort = this.configService.get("PORT");
  }
}
