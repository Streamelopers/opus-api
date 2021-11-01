import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { ApiBasicAuth, ApiTags } from "@nestjs/swagger";

import { ResponseInterceptor, TransformInterceptor } from "@interceptors/index";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CurrentUser } from "@modules/auth/common/decorators";
import { CompaniesService } from "./companies.service";
import { JwtAuthGuard } from "@modules/auth/common/guards";
import { ResponseCompanyDto } from "./dto";

@ApiTags("Companies")
@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @ApiBasicAuth("access-token")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCompanyDto)
  )
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @CurrentUser("id") userId: number
  ): Promise<ResponseCompanyDto> {
    return this.companiesService.create(createCompanyDto, userId);
  }

  @Get()
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCompanyDto)
  )
  findAll(): Promise<ResponseCompanyDto[]> {
    return this.companiesService.findAll();
  }

  @Get(":id")
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCompanyDto)
  )
  findOne(@Param("id") id: number): Promise<ResponseCompanyDto> {
    return this.companiesService.findOne(id);
  }

  @Patch(":id")
  @ApiBasicAuth("access-token")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    ResponseInterceptor,
    new TransformInterceptor(ResponseCompanyDto)
  )
  update(
    @Param("id") id: number,
    @Body() updateCompanyDto: UpdateCompanyDto
  ): Promise<ResponseCompanyDto> {
    return this.companiesService.update(id, updateCompanyDto);
  }

  @ApiBasicAuth("access-token")
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param("id") id: number): Promise<void> {
    return this.companiesService.remove(id);
  }
}
