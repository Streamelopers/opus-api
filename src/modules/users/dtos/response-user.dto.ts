import { IsString, IsNumber, IsDate } from "class-validator";
import { Expose, Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Exclude()
export class ResponseUserDto {
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
  readonly lastname: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly username: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  readonly email: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  picture: string | null;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  background: string | null;

  @Expose()
  @IsDate()
  @ApiProperty({ type: Date })
  birthdate: Date | null;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  location: string | null;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  bio: string | null;

  @Expose()
  @IsString()
  @ApiProperty({ type: String })
  website: string | null;
}
