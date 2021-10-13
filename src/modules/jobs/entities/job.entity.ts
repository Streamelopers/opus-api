import {
  Entity,
  Column,
  // JoinColumn,
  // OneToOne,
  // OneToMany,
  // JoinTable,
} from "typeorm";
import { Base } from "@common/entities/base";
// import { Jobtype } from "src/jobtypes/entities/jobtype.entity";
// import { User } from "src/users/entities/user.entity";
// import { Level } from "src/levels/entities/level.entity";
// import { Tag } from "../../tags/entities/tag.entity";
// import { Company } from "src/companies/entities/company.entity";
// import { Currency } from "src/currencies/entities/currency.entity";
// import { Paymenttype } from "src/paymenttypes/entities/paymenttype.entity";
// import { Location } from "src/locations/entities/location.entity";

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

  @Column({ name: "application_target " })
  applicationTarget: string;

  // @OneToOne(() => User)
  // @JoinColumn()
  // user: User;

  // @Column({ nullable: true })
  // userId: number;

  // @OneToOne(() => Company)
  // @JoinColumn()
  // company: Company;

  // @Column({ nullable: true })
  // companyId: number;

  // @OneToOne(() => Level)
  // @JoinColumn()
  // level: Level;

  // @Column({ nullable: true })
  // levelId: number;

  // @OneToOne(() => Jobtype)
  // @JoinColumn()
  // jobtype: Jobtype;

  // @Column({ nullable: true })
  // jobtypeId: number;

  // @OneToOne(() => Currency)
  // @JoinColumn()
  // currency: Currency;

  // @Column({ nullable: true })
  // currencyId: number;

  // @OneToOne(() => Location)
  // @JoinColumn()
  // location: Location;

  // @Column({ nullable: true })
  // locationId: number;

  // @OneToOne(() => Paymenttype)
  // @JoinColumn()
  // paymenttype: Paymenttype;

  // @Column({ nullable: true })
  // paymenttypeId: number;

  // @OneToMany((type) => Tag, (tag) => tag.jobs)
  // @JoinTable()
  // tags: Tag[];
}
