import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobtypesService } from './jobtypes.service';
import { CreateJobtypeDto } from './dto/create-jobtype.dto';
import { UpdateJobtypeDto } from './dto/update-jobtype.dto';

@Controller('jobtypes')
export class JobtypesController {
  constructor(private readonly jobtypesService: JobtypesService) {}

  @Post()
  create(@Body() createJobtypeDto: CreateJobtypeDto) {
    return this.jobtypesService.create(createJobtypeDto);
  }

  @Get()
  findAll() {
    return this.jobtypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobtypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobtypeDto: UpdateJobtypeDto) {
    return this.jobtypesService.update(+id, updateJobtypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobtypesService.remove(+id);
  }
}
