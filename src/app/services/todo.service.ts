import { Injectable } from "@angular/core";
import { Todo } from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  id = 1;

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(todo => todo.id === Number(id));
  }

  createTodo(todo: { title: string, content: string }) {
    const newTodo: Todo = {
      id: this.id++,
      title: todo.title,
      content: todo.content,
      createdAt: new Date
    };

    this.todos.push(newTodo);
  }

  updateTodo(id: number, todo: { title: string, content: string }) {
    this.todos = this.todos.map(origin => {
      if (origin.id !== id) {
        return origin;
      }

      const newTodo = {
        ...origin,
        title: todo.title,
        content: todo.content,
        updatedAt: new Date()
      }

      return newTodo;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}