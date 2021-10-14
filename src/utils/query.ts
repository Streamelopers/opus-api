import { ApiProperty } from "@nestjs/swagger";

export class QueryParams {
  @ApiProperty({
    required: false,
    default: "",
  })
  q: string;

  @ApiProperty({
    required: false,
    default: 1,
  })
  page: number;

  @ApiProperty({
    required: false,
    default: 10,
  })
  pageSize: number;

  @ApiProperty({
    required: false,
    default: "DESC",
  })
  sort: string;
}
