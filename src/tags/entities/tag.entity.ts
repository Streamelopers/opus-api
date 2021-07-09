import { Base } from "../../../framework/entities/base";
import { Entity, Column, ManyToMany } from "typeorm";
import { Job } from "../../jobs/entities/job.entity";

@Entity("tags")
export class Tag extends Base {
  @Column()
  name: string;

  @ManyToMany((type) => Job, (job) => job.tags)
  jobs: Job[];
}
