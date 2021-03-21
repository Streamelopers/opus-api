import { Module } from '@nestjs/common';
import { JobTypesService } from './job-types.service';
import { JobTypesController } from './job-types.controller';

@Module({
  controllers: [JobTypesController],
  providers: [JobTypesService]
})
export class JobTypesModule {}
