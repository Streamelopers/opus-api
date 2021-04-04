import {Length, Max, Min} from "class-validator";
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
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
  @Length(5, 50)
  title: string;

  @Column()
  @Length(20, 500)
  description: string;

  @Column()
  @Length(20, 500)
  howToApply: string;

  @Column()
  @Min(0)
  @Max(1000000000)
  minSalary: number;

  @Column()
  @Min(0)
  @Max(1000000000)
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
