import { Entity, Column } from "typeorm";
import { Base } from "../../../framework/entities/base";

@Entity("job_types")
export class Jobtype extends Base {
  @Column()
  name: string;
}
