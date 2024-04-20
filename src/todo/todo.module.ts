import { Module } from '@nestjs/common';
import { TodoService } from './services/todo/todo.service';
import { TodoController } from './todo.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoMapperService } from './services/mapper';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoMapperService],
})
export class TodoModule {}
