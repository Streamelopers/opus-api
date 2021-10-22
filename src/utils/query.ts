import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class QueryParams {
  @ApiProperty({
    required: false,
    type: Number,
    default: "",
  })
  @IsString()
  @IsOptional()
  q: string;

  @ApiProperty({
    required: false,
    type: Number,
    default: 1,
  })
  @IsNumber()
  page: number;

  @ApiProperty({
    required: false,
    type: Number,
    default: 10,
  })
  @IsNumber()
  pageSize: number;

  @ApiProperty({
    required: false,
    type: String,
    default: "DESC",
  })
  @IsString()
  sort: string;
}
