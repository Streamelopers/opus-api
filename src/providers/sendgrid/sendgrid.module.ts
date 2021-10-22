import { Module } from "@nestjs/common";

import { SendGridConnectionFactory } from "./sendgrid.factory";

@Module({
  providers: [SendGridConnectionFactory],
  exports: [SendGridConnectionFactory],
})
export class SendGridModule {}
