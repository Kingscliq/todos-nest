import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todos') private readonly todoModel: Model<Todo>) {}

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

  async deleteTodo(id: string): Promise<Todo> {
    return await this.todoModel.findByIdAndDelete({ _id: id });
  }

  async updateTodo(id: string, todo: Todo): Promise<Todo> {
    return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }
}
