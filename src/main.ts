import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

// import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT;

  // config yaml 파일 사용시
  // const serverConfig = config.get('server');
  // const port = serverConfig.port;

  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
