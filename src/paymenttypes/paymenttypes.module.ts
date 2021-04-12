import { Module } from "@nestjs/common";
import { PaymenttypesService } from "./paymenttypes.service";
import { PaymenttypesController } from "./paymenttypes.controller";
import { Paymenttype } from "./entities/paymenttype.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Paymenttype])],
  controllers: [PaymenttypesController],
  providers: [PaymenttypesService],
})
export class PaymenttypesModule {}
