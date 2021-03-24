import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // added pipe to validate params and body
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
