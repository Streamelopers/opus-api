import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  BadRequestException
} from '@nestjs/common';
import { getRepository } from 'typeorm';

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
   */
  constructor(private entity: any, private field: string) {}

  async transform(value: object, _metadata: ArgumentMetadata): Promise<object | HttpException> {
    // parser field with id postfic.
    // example: 'user' to 'user_id'
    const id = value[`${this.field}_id`];
    const dataEntity = await getRepository(this.entity).findOne(id);

    // checking existing of and saves on body request.
    if (dataEntity) return { [this.field]: dataEntity, ...value };

    // raise error if not exists data.
    throw new BadRequestException('El usuario no existe!');
  }
}
