import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { UsersService } from "@modules/users/users.service";
import { Company } from "./entities/company.entity";

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    private readonly userService: UsersService
  ) {}

  async create(
    createCompanyDto: CreateCompanyDto,
    userId: number
  ): Promise<Company> {
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const createdCompany = this.companyRepository.create({
      ...createCompanyDto,
      user,
    });

    return await this.companyRepository.save(createdCompany);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepository.findOne({
      id,
      isActive: true,
    });

    if (!company) {
      throw new NotFoundException("Company not found");
    }

    return company;
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company> {
    const company = await this.companyRepository.preload({
      id,
      ...updateCompanyDto,
    });

    if (!company) {
      throw new NotFoundException("Company not found");
    }

    return company;
  }

  async remove(id: number): Promise<void> {
    const company = await this.companyRepository.preload({
      id,
      isActive: false,
      deletedAt: new Date(),
    });

    if (!company) {
      throw new NotFoundException("Company not found");
    }
  }
}
