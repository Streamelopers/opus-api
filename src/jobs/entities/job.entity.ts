import {
  Entity,
  Column,
  JoinColumn,
  OneToOne,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Base } from "../../../framework/entities/base";
import { Jobtype } from "../../jobtypes/entities/jobtype.entity";
import { User } from "../../users/entities/user.entity";
import { Level } from "../../levels/entities/level.entity";
import { Tag } from "../../tags/entities/tag.entity";
import { Company } from "../../companies/entities/company.entity";
import { Currency } from "../../currencies/entities/currency.entity";

@Entity()
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

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @OneToOne(() => Level)
  @JoinColumn()
  level: Level;

  @OneToOne(() => Jobtype)
  @JoinColumn()
  jobtype: Jobtype;

  @OneToOne(() => Currency)
  @JoinColumn()
  currency: Currency;

  @OneToMany((type) => Tag, (tag) => tag.jobs)
  @JoinTable()
  tags: Tag[];
}
