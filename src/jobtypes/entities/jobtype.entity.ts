import { Entity, Column } from 'typeorm';
import { Base } from '../../../framework/entities/base';

@Entity()
export class Jobtype extends Base {
  @Column()
  name: string;
}
