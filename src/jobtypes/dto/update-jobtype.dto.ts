import { PartialType } from "@nestjs/mapped-types";
import { CreateJobtypeDto } from "./create-jobtype.dto";

export class UpdateJobtypeDto extends PartialType(CreateJobtypeDto) {}
