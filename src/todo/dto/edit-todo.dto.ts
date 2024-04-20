import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class EditTodoDto extends PartialType(CreateTodoDto) {}
