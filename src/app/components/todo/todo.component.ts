import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Todo } from "src/app/model/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoComponent {

  @Input() todo!: Todo;
  @Output() toDelete = new EventEmitter<Todo>();

  deleteTodo() {
    this.toDelete.emit(this.todo);
  }
}