import { Entity, Column } from 'typeorm';
import { Base } from '../../../framework/entities/base';

@Entity()
export class Level extends Base {
  @Column()
  name: string;
}
