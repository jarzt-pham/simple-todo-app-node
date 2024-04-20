import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/todo/dto/todo.dto';
import { Todo } from 'src/todo/entities/todo.entity';

@Injectable()
export class TodoMapperService {
  public modelToDto(entity: Partial<Todo>) {
    return new TodoDto(entity);
  }
}
