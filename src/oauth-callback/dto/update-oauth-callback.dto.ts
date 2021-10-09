import { PartialType } from '@nestjs/swagger';
import { CreateOauthCallbackDto } from './create-oauth-callback.dto';

export class UpdateOauthCallbackDto extends PartialType(CreateOauthCallbackDto) {}
