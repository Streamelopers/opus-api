import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { CompaniesModule } from "./companies/companies.module";
import { CurrenciesModule } from "./currencies/currencies.module";
import { JobsModule } from "./jobs/jobs.module";
import { TagsModule } from "./tags/tags.module";
import { PicturesModule } from "./pictures/pictures.module";
import { LevelsModule } from "./levels/levels.module";
import { JobtypesModule } from "./jobtypes/jobtypes.module";
import { AuthModule } from "./auth/auth.module";
import { PaymenttypesModule } from "./paymenttypes/paymenttypes.module";
import { LocationsModule } from "./locations/locations.module";
import { OauthModule } from './oauth/oauth.module';
import { OauthCallbackModule } from './oauth-callback/oauth-callback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
    OauthModule,
    OauthCallbackModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
