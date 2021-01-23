import {Entity, Column, OneToOne, OneToMany, JoinColumn} from "typeorm";
import {
  Base,
  Locations,
  Companies,
  Users,
  Currencies,
  PaymentTypes,
  JobTypes,
  Levels
} from "./index";

@Entity()
export class Jobs extends Base {
  @Column()
  description: string;

  @Column()
  howToApply: string;

  @Column()
  minSalary: number;

  @Column()
  maxSalary: number;

  @Column({ default: false })
  isRemote: boolean;

  @Column({ default: false })
  isRemoteOnly: boolean;

  @OneToOne(() => Companies)
  @JoinColumn()
  company: Companies

  @OneToOne(() => Users)
  @JoinColumn()
  user: Users

  @OneToOne(() => Locations)
  @JoinColumn()
  location: Locations

  @OneToOne(() => Currencies)
  @JoinColumn()
  currency: Currencies

  @OneToOne(() => PaymentTypes)
  @JoinColumn()
  paymentType: PaymentTypes

  @OneToOne(() => JobTypes)
  @JoinColumn()
  jobType: JobTypes

  @OneToOne(() => Levels)
  @JoinColumn()
  level: Levels
}