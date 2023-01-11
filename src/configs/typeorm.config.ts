import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '9131',
  database: 'nestjs_test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
