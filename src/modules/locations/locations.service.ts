import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { Location } from "./entities/location.entity";
import { QueryParams } from "@utils/query";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
  ) {}

  async create(
    createLocationDto: CreateLocationDto
  ): Promise<CreateLocationDto> {
    await this.locationRepository.insert(createLocationDto);

    return createLocationDto;
  }

  findAll(query: QueryParams): Promise<Location[]> {
    return this.locationRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<Location> {
    return this.locationRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(
    id: number,
    updateLocationDto: UpdateLocationDto
  ): Promise<UpdateLocationDto> {
    await this.locationRepository.update(id, updateLocationDto);

    return updateLocationDto;
  }

  async remove(id: number): Promise<string> {
    await this.locationRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "El location fue desactivado correctamente";
  }
}
