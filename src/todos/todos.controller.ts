import { Controller, Get, Post, Put, Delete, Patch, Body, Param, Query } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { Todo } from './interfaces/todo.interfaces';
import { TodosService } from './todos.service';

@Controller('todos') // The parameters passed to the controller is the api route hence this controller makes reference to /todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param() param): Promise<Todo> {
    return this.todosService.getSingleTodo(param.id);
  }

  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Promise<Todo> {
    return this.todosService.addTodo(addTodoDto);
  }

  @Patch(':id')
  updateTodo(@Body() updateTodoDto: AddTodoDto, @Param('id') id: string): Promise<Todo> {
    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.deleteTodo(id);
  }
}
