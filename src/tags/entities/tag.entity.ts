import { Base } from "../../../framework/entities/base";
import { Entity, Column, JoinTable, ManyToMany } from "typeorm";
import { Job } from "../../jobs/entities/job.entity";

@Entity()
export class Tag extends Base {
  @Column()
  name: string;

  @ManyToMany((type) => Job, job => job.tags)
  @JoinTable()
  jobs: Job[];
}
