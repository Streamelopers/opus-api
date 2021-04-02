import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
} from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { QueryParams } from "../../framework/utils/query";
import { ValidationEntity } from "../../framework/pipes/validationEntity.pipe";
import { User } from "../users/entities/user.entity";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Companies")
@Controller("companies")
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @UsePipes(new ValidationEntity(User, "user"))
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(@Query() params: QueryParams) {
    return this.companiesService.findAll(params);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.companiesService.remove(+id);
  }
}
