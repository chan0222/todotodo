import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

type Todo = {
  id: number,
  content: string,
  done: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Homepage {

  inputValue: string = '';

  todos: Todo[] = [
    {
      id: 1,
      content: '공부하기',
      done: false
    },
    {
      id: 2,
      content: '밥먹기',
      done: false
    }
  ];

  addTodo() {
    if (!this.inputValue) {
      alert('입력된 내용이 없습니다.');
      return;
    }

    const lastTodoId = this.todos[this.todos.length - 1].id;

    const newTodo = {
      id: lastTodoId + 1,
      content: this.inputValue,
      done: false
    };

    this.todos.push(newTodo);

    this.inputValue = '';
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(origin => origin.id !== todo.id);
  }

}