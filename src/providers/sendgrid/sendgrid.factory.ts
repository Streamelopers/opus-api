import { ConfigService } from "@nestjs/config";
import { MailService } from "@sendgrid/mail";
import * as sgMail from "@sendgrid/mail";

import { SEND_GRID } from "./sendgrid.constant";

export const SendGridConnectionFactory = {
  provide: SEND_GRID,
  inject: [ConfigService],
  useFactory: (configService: ConfigService): MailService => {
    const SENDGRID_API_KEY = configService.get("SENDGRID_API_KEY");
    sgMail.setApiKey(SENDGRID_API_KEY);

    return sgMail;
  },
};
