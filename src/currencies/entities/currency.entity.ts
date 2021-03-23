import { Entity, Column } from 'typeorm';
import { Base } from '../../../framework/entities/base';

@Entity()
export class Currency extends Base {
  @Column()
  name: string;

  @Column({ default: '$DOP' })
  symbol: string;

  @Column({ default: 'DOP' })
  isCode: string;
}
