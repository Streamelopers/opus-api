import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { JobsModule } from './jobs/jobs.module';
import { TagsModule } from './tags/tags.module';
import { PicturesModule } from './pictures/pictures.module';
import { LevelsModule } from './levels/levels.module';
import { JobTypesModule } from './job-types/job-types.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, CompaniesModule, CurrenciesModule, JobsModule, TagsModule, PicturesModule, LevelsModule, JobTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
