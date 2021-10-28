import { IsString, IsNumber, IsEnum } from "class-validator";
import { Expose, Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

import { Identities } from "@modules/auth/common/enums";

@Exclude()
export class SignInResponseDto {
  @Expose()
  @IsNumber()
  @ApiProperty({ type: Number })
  readonly id: number;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly name: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly email: string;

  @Expose()
  @IsEnum(Identities)
  @ApiProperty({ enum: Identities })
  readonly identity: string;

  @Expose()
  @ApiProperty({ type: String })
  readonly token: string;
}
