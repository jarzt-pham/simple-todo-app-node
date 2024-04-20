import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './config';
import { TodoMapperService } from './todo/services/mapper/todo-mapper.service';

@Module({
  imports: [TodoModule, TypeOrmModule.forRootAsync(Configuration.Database)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
