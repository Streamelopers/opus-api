import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { QueryParams } from "@utils/query";
import { ApiTags } from "@nestjs/swagger";
import { ResponseInterceptor } from "@interceptors/response.interceptor";
import { Company } from "./entities/company.entity";

@ApiTags("Companies")
@Controller("companies")
@UseInterceptors(ResponseInterceptor)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(
    @Body() createCompanyDto: CreateCompanyDto
  ): Promise<CreateCompanyDto> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(@Query() params: QueryParams): Promise<Company[]> {
    return this.companiesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Company> {
    return this.companiesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCompanyDto: UpdateCompanyDto
  ): Promise<UpdateCompanyDto> {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<string> {
    return this.companiesService.remove(+id);
  }
}
