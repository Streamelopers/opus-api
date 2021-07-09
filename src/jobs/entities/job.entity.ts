import { Entity, Column, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Base } from "framework/entities/base";
import { Jobtype } from "src/jobtypes/entities/jobtype.entity";
import { User } from "src/users/entities/user.entity";
import { Level } from "src/levels/entities/level.entity";
import { Tag } from "../../tags/entities/tag.entity";
import { Company } from "src/companies/entities/company.entity";
import { Currency } from "src/currencies/entities/currency.entity";
import { Paymenttype } from "src/paymenttypes/entities/paymenttype.entity";
import { Location } from "src/locations/entities/location.entity";

@Entity("jobs")
export class Job extends Base {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: "how_to_apply" })
  howToApply: string;

  @Column({ name: "max_salary" })
  maxSalary: number;

  @Column({ name: "min_salary" })
  minSalary: number;

  @Column({ name: "is_remote" })
  isRemote: boolean;

  @Column({ name: "is_remote_only" })
  isRemoteOnly: boolean;

  @Column({ name: "application_target" })
  applicationTarget: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Company)
  @JoinColumn({ name: "company_id" })
  company: Company;

  @OneToOne(() => Level)
  @JoinColumn({ name: "level_id" })
  level: Level;

  @OneToOne(() => Jobtype)
  @JoinColumn({ name: "job_type_id" })
  jobtype: Jobtype;

  @OneToOne(() => Currency)
  @JoinColumn({ name: "currency_id" })
  currency: Currency;

  @OneToOne(() => Location)
  @JoinColumn({ name: "location_id" })
  location: Location;

  @OneToOne(() => Paymenttype)
  @JoinColumn({ name: "payment_type_id" })
  paymenttype: Paymenttype;

  @OneToMany((type) => Tag, (tag) => tag.jobs)
  tags: Tag[];
}
