import { Module } from '@nestjs/common';
import { JobtypesService } from './jobtypes.service';
import { JobtypesController } from './jobtypes.controller';

@Module({
  controllers: [JobtypesController],
  providers: [JobtypesService]
})
export class JobtypesModule {}
