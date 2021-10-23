import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { PaymentTypesController } from "./payment-types.controller";
import { PaymentTypesService } from "./payment-types.service";
import { PaymentType } from "./entities";

@Module({
  imports: [TypeOrmModule.forFeature([PaymentType])],
  controllers: [PaymentTypesController],
  providers: [PaymentTypesService],
})
export class PaymentTypesModule {}
