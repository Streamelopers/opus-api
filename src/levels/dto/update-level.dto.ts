import { PartialType } from '@nestjs/mapped-types';
import { CreateLevelDto } from './create-level.dto';

export class UpdateLevelDto extends PartialType(CreateLevelDto) {}
