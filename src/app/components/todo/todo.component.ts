import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from 'src/app/model/todo.model';
//자식 컴포넌트
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class
  TodoComponent {
  @Input() todo!: Todo; //부모 컴포넌트로부터 입력된 todo 객체
  @Output() toDelete = new EventEmitter<Todo>();
  // todo 삭제를 알리기 위한 이벤트
  deleteTodo() {
    // 삭제 버튼 클릭 시 이함수가 실행되어 todo 삭제 이벤트를 발생 시킴 
    this.toDelete.emit(this.todo);
  }
}


//todo.component.html 자식컴포넌트
// <li>
// <input type="checkbox" [(ngModel)]="todo.done">
// <p>{{todo.content}}</p>
// <button (click)="deleteTodo()">삭제</button>
// </li>

//home.page.html 부모컴포넌트
// <ul class="space-y-2 overflow-y-auto">
// @for(todo of todos; track todo.id){
// <app-todo [todo]="todo" (toDelete)="deleteTodo($event)" />
// }
// </ul>

// home.page.ts 부모컴포넌트
// >> 부모컴포넌트에 자식컴포넌트를 import 해야됨

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TodoComponent } from 'src/app/components/todo/todo.component';
// import { Todo } from 'src/app/model/todo.model';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.page.html',
//   standalone: true,
//   imports: [CommonModule, FormsModule, TodoComponent],
// })
// deleteTodo(todo: Todo) {
//   this.todos = this.todos.filter((origin) => origin.id !== todo.id);
// }