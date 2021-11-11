/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
//import { DBHelper } from '../../api/src/app/helper/DbHelper';
import { AppModule } from './app/app.module';
import { DbHelper } from '@nx-postapp-fullstack/db-helper'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });

  DbHelper.init();
  
}

bootstrap();
