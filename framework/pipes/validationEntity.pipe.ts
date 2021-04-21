import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  BadRequestException
} from '@nestjs/common';
import { getRepository } from 'typeorm';

interface optionsValidationEntity {
  isOptional: boolean;
}

/**
 * Class validator for entities.
 * 
 * This pipe verifies the existence of an entity and 
 * saves data in the request's body.
 * 
 */
@Injectable()
export class ValidationEntity implements PipeTransform {
  /**
   * @param entity - class Entity to make query and get data.
   * @param field  - field of id inside the body.
   * @param options - options for validation
   */
  constructor(
    private entity: any,
    private field: string,
    private options: optionsValidationEntity = { isOptional: false }
  ) {}

  async transform(value: object, _metadata: ArgumentMetadata): Promise<object | HttpException> {
    // parser field with id postfic.
    // example: 'user' to 'user_id'
    const id = value[`${this.field}_id`];
    const dataEntity = await getRepository(this.entity).findOne(id);

    // checking existing of and saves on body request.
    if (dataEntity) return { [this.field]: dataEntity, ...value };
    if (this.options.isOptional) return value;

    // raise error if not exists data.
    throw new BadRequestException(`La entidad (${this.field}) no existe.`);
  }
}
