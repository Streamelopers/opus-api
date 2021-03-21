import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';

@Module({
  controllers: [LevelsController],
  providers: [LevelsService]
})
export class LevelsModule {}
