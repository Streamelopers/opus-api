import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query,
} from "@nestjs/common";
import { LocationsService } from "./locations.service";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { QueryParams } from "framework/utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "framework/interceptors/response.interceptor";
import { Location } from "./entities/location.entity";

@ApiTags("Locations")
@Controller("locations")
@UseInterceptors(ResponseInterceptor)
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  create(
    @Body() createLocationDto: CreateLocationDto
  ): Promise<CreateLocationDto> {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Location[]> {
    return this.locationsService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Location> {
    return this.locationsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLocationDto: UpdateLocationDto
  ): Promise<UpdateLocationDto> {
    return this.locationsService.update(+id, updateLocationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.locationsService.remove(+id);
  }
}
