import { Entity, Column } from "typeorm";
import { Base } from "@common/entities/base";

@Entity("job_types")
export class Jobtype extends Base {
  @Column()
  name: string;
}
