import { TodoService } from './../../services/todo.service';
import { DatePipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Todo } from "src/app/model/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  standalone: true,
  imports: [
    DatePipe,
    RouterModule
  ],
  host: {
    class: 'h-full'
  }
})
export class TodoListPage implements OnInit {

  private readonly todoService = inject(TodoService);

  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}