import { Entity, Column } from "typeorm";
import { Base } from "framework/entities/base";

@Entity("locations")
export class Location extends Base {
  @Column()
  name: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
