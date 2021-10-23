import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateLocationDto, UpdateLocationDto } from "./dto";
import { Location } from "./entities";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async findOne(id: number): Promise<Location> {
    const location = await this.locationRepository.findOne({
      id,
      isActive: true,
    });

    if (!location) {
      throw new NotFoundException("Location not found");
    }

    return location;
  }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const createdLocation = this.locationRepository.create(createLocationDto);

    return await this.locationRepository.save(createdLocation);
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto
  ): Promise<Location> {
    const updatedLocation = await this.locationRepository.preload({
      id,
      ...updateLocationDto,
    });

    if (!updatedLocation) {
      throw new NotFoundException("Location not found");
    }

    await updatedLocation.save();

    return updatedLocation;
  }

  async remove(id: number): Promise<void> {
    const deletedLocation = await this.locationRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!deletedLocation) {
      throw new NotFoundException("Location not found");
    }

    await deletedLocation.save();
  }
}
