import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { CreateOauthCallbackDto } from './dto/create-oauth-callback.dto';
import { UpdateOauthCallbackDto } from './dto/update-oauth-callback.dto';

@Injectable()
export class OauthCallbackService {
  constructor(private httpService: HttpService) {}

  getAccessToken(code: string) {

    const body = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    }

    const opts = { headers: { accept: 'application/json' } }

    const res = this.httpService.post('https://github.com/login/oauth/access_token', body, opts);
    return res.pipe(map(response => response.data));
  }

}
