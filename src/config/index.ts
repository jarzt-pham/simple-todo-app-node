import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';

export namespace Configuration {
  export let Properties;

  export const Database: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_DB'),
      synchronize: configService.get('DATABASE_SYNC'),
      autoLoadEntities: true,
    }),
    inject: [ConfigService],
  };
}
