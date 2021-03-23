import { Base } from '../../../framework/entities/base';
import { Entity, Column } from 'typeorm';

@Entity()
export class Tag extends Base {
  @Column()
  name: string;
}
