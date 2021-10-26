import { Module } from "@nestjs/common";
import { CloudinaryConnectionFactory } from "./cloudinary.factory";
import { CloudinaryService } from "./cloudinary.service";

@Module({
  providers: [CloudinaryConnectionFactory, CloudinaryService],
  exports: [CloudinaryConnectionFactory, CloudinaryService],
})
export class CloudinaryModule {}
