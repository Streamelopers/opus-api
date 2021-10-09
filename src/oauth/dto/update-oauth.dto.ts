import { PartialType } from '@nestjs/swagger';
import { CreateOauthDto } from './create-oauth.dto';

export class UpdateOauthDto extends PartialType(CreateOauthDto) {}
