import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import {
  CreateLocationDto,
  UpdateLocationDto,
  ResponseLocationDto,
} from "./dto";
import { TransformInterceptor, ResponseInterceptor } from "@interceptors/index";
import { LocationsService } from "./locations.service";

@ApiTags("Locations")
@Controller("locations")
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLocationDto)
  )
  findAll(): Promise<ResponseLocationDto[]> {
    return this.locationsService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLocationDto)
  )
  findOne(@Param("id") id: string): Promise<ResponseLocationDto> {
    return this.locationsService.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLocationDto)
  )
  create(
    @Body() createLocationDto: CreateLocationDto
  ): Promise<ResponseLocationDto> {
    return this.locationsService.create(createLocationDto);
  }

  @Patch(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseLocationDto)
  )
  update(
    @Param("id") id: string,
    @Body() updateLocationDto: UpdateLocationDto
  ): Promise<ResponseLocationDto> {
    return this.locationsService.update(+id, updateLocationDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.locationsService.remove(id);
  }
}
