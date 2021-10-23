import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { LocationsController } from "./locations.controller";
import { LocationsService } from "./locations.service";
import { Location } from "./entities/location.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
