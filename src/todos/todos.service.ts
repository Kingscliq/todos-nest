import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todos') private readonly todoModel: Model<Todo>) {}

  //   private readonly todos: Todo[] = [
  //     {
  //       id: '23424-422344-242344-2343',
  //       title: 'Take out trash',
  //       description: 'Take out trash first thing tomorrow Morning',
  //       category: 'Personal',
  //       isCompleted: false,
  //     },
  //     {
  //       id: '23424-422344-242344-2334',
  //       title: 'Todo two',
  //       description: 'Do todo two',
  //       category: 'Personal',
  //       isCompleted: false,
  //     },
  //     {
  //       id: '23424-422344-242344-3345',
  //       title: 'Todo Three',
  //       description: 'Lets talk about todo three',
  //       category: 'Business',
  //       isCompleted: false,
  //     },
  //   ];

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async getSingleTodo(id: string): Promise<Todo> {
    return await this.todoModel.findOne({ _id: id });
  }

  async addTodo(todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    return await newTodo.save();
  }
  //   getSingleTodo(id: string): Todo {
  //     return this.
  //   }
}
