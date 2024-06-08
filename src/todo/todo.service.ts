import { Injectable } from '@nestjs/common';

import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll() {
    return this.todos;
  }

  create(createTodoDto: any) {
    const newTodo = { ...createTodoDto, id: this.todos.length + 1 };
    this.todos.push(newTodo);

    return newTodo;
  }

  update(id: string, updateTodoDto: any) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === parseInt(id));
    if (todoIndex !== -1) {
      const updatedTodo = { ...this.todos[todoIndex], ...updateTodoDto };
      this.todos[todoIndex] = updatedTodo;
      return updatedTodo;
    }
    return undefined;
  }

  remove(id: string) {
    const todoIndex = this.todos.findIndex((item) => item.id === +id);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
