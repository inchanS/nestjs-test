import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.TYPEORM_HOST || dbConfig.host,
  port: process.env.TYPEORM_PORT || dbConfig.port,
  username: process.env.TYPEORM_USERNAME || dbConfig.username,
  password: process.env.TYPEORM_PASSWORD || dbConfig.password,
  database: process.env.TYPEORM_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
