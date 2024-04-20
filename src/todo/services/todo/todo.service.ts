import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { TodoMapperService } from '../mapper';
import { TodoDto } from 'src/todo/dto/todo.dto';
import { Repository } from 'typeorm';
import {
  ChangeStatusTodoDto,
  CreateTodoDto,
  EditTodoDto,
} from '../../../todo/dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private _todoRepository: Repository<Todo>,
    private _todoMapper: TodoMapperService,
  ) {}
  async create({ name, description }: CreateTodoDto) {
    const todoEntity = new Todo();
    todoEntity.create({ name, description });
    const todo = await this._todoRepository.save(todoEntity);

    return this._todoMapper.modelToDto(todo);
  }

  async findAll(): Promise<TodoDto[]> {
    const listOfTodo = await this._todoRepository.find();

    return listOfTodo.map((e) => this._todoMapper.modelToDto(e));
  }

  async findOne(id: string): Promise<TodoDto> {
    const todo = await this._todoRepository.findOneBy({ id });
    if (todo === undefined || todo === null)
      throw new NotFoundException(`Todo with id ${id} not found`);

    return this._todoMapper.modelToDto(todo);
  }

  async edit(id: string, { name, description }: EditTodoDto) {
    const todo = await this._todoRepository.findOneBy({ id });
    if (todo === undefined || todo === null)
      throw new NotFoundException(`Todo with id ${id} not found`);

    const todoEntity = new Todo();
    todoEntity.edit({ name, description });
    await this._todoRepository.update(id, todoEntity);

    return this._todoMapper.modelToDto({ id, ...todoEntity });
  }

  async changeStatus(id: string, { status }: ChangeStatusTodoDto) {
    const todo = await this._todoRepository.findOneBy({ id });
    if (todo === undefined || todo === null)
      throw new NotFoundException(`Todo with id ${id} not found`);

    const todoEntity = new Todo();
    todoEntity.changeStatus(status);
    await this._todoRepository.update(id, todoEntity);

    return this._todoMapper.modelToDto({ id, ...todoEntity });
  }

  async remove(id: string) {
    const todo = await this._todoRepository.findOneBy({ id });
    if (todo === undefined || todo === null)
      throw new NotFoundException(`Todo with id ${id} not found`);

    const toIsRemoved = await this._todoRepository.remove(todo);

    return this._todoMapper.modelToDto({ id, ...toIsRemoved });
  }
}
