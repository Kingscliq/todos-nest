import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { Todo } from './interfaces/todo.interfaces';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getAllTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param() param): Todo {
    return this.todosService.getSingleTodo(param.id);
  }

  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): string {
    return `Title: ${addTodoDto.title} - Iscompleted: ${addTodoDto.isCompleted} `;
  }

  @Patch(':id')
  updateTodo(@Body() updateTodoDto: AddTodoDto, @Param('id') id): string {
    return `Updated item ${id}`;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): string {
    return `Delete Item ${id}`;
  }
}
