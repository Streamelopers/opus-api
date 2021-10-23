import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";

import { PaymentTypesModule } from "@modules/payment-types/payment-types.module";
import { CurrenciesModule } from "@modules/currencies/currencies.module";
import { LocationsModule } from "@modules/locations/locations.module";
import { CompaniesModule } from "@modules/companies/companies.module";
import { JobtypesModule } from "@modules/job-types/job-types.module";
import { AuthenticationModule } from "@modules/auth/auth.module";
import { LevelsModule } from "@modules/levels/levels.module";
import { DatabaseModule } from "@database/database.module";
import { UsersModule } from "@modules/users/users.module";
import { JobsModule } from "@modules/jobs/jobs.module";
import { TagsModule } from "@modules/tags/tags.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    CompaniesModule,
    CurrenciesModule,
    JobsModule,
    TagsModule,
    LevelsModule,
    JobtypesModule,
    LocationsModule,
    PaymentTypesModule,
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
