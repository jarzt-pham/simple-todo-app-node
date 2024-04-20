import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = app.get(ConfigService);
  const port = config.get('APPLICATION_PORT') || 3000;
  
  await app.listen(port);
}
bootstrap();
