import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger, ValidationPipe } from "@nestjs/common";
import * as compression from "compression";
import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";

import { HttpExceptionFilter, DatabaseExceptionFilter } from "@filters/index";
import { configSwagger } from "@config/index";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.setGlobalPrefix("api");

  app.use(helmet());
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new DatabaseExceptionFilter()
  );

  configSwagger(app);

  await app.listen(AppModule.applicationPort);
}

bootstrap().then(() => {
  Logger.log("Application is up and running.");
});
