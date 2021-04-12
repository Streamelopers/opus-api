import { Module } from "@nestjs/common";
import { PaymenttypesService } from "./paymenttypes.service";
import { PaymenttypesController } from "./paymenttypes.controller";

@Module({
  controllers: [PaymenttypesController],
  providers: [PaymenttypesService],
})
export class PaymenttypesModule {}
