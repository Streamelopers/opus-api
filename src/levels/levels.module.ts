import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { Level } from './entities/level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  controllers: [LevelsController],
  providers: [LevelsService]
})
export class LevelsModule {}
