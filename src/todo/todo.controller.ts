import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './services/todo/todo.service';
import { ConfigService } from '@nestjs/config';
import { ChangeStatusTodoDto, CreateTodoDto, EditTodoDto } from './dto';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  updateContent(@Param('id') id: string, @Body() updateTodoDto: EditTodoDto) {
    console.log({ id });
    return this.todoService.edit(id, updateTodoDto);
  }
  @Patch(':id/change-status')
  updateStatus(
    @Param('id') id: string,
    @Body() changeStatusTodoDto: ChangeStatusTodoDto,
  ) {
    return this.todoService.changeStatus(id, changeStatusTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
