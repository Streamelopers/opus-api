import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { QueryParams } from "@utils/query";
import { Company } from "./entities/company.entity";

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<CreateCompanyDto> {
    await this.companyRepository.insert(createCompanyDto);

    return createCompanyDto;
  }

  findAll(query: QueryParams): Promise<Company[]> {
    return this.companyRepository.find({
      skip: query.page * query.pageSize,
      take: query.pageSize,
      where: {
        isActive: true,
        name: Like(`%${query.q}%`),
      },
    });
  }

  findOne(id: number): Promise<Company> {
    return this.companyRepository.findOne({
      id,
      isActive: true,
    });
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<UpdateCompanyDto> {
    await this.companyRepository.update(id, updateCompanyDto);

    return updateCompanyDto;
  }

  async remove(id: number): Promise<string> {
    await this.companyRepository.update(id, {
      isActive: false,
      deletedAt: new Date(),
    });

    return "La empresa fue desactivado correctamente";
  }
}
