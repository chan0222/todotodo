import { DatePipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Todo } from "src/app/model/todo.model";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  standalone: true,
  imports: [
    RouterModule,
    DatePipe
  ],
  host: {
    class: 'h-full'
  }
})
export class TodoDetailPage implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly todoService = inject(TodoService);
  private readonly router = inject(Router);

  todo!: Todo | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.todo = this.todoService.getTodo(id);

    if (!this.todo) {
      this.back();
    }
  }

  back() {
    this.router.navigateByUrl('');
  }

  deleteTodo() {
    if (!this.todo) {
      return;
    }

    const confirm = window.confirm('삭제할까요?');

    if (!confirm) {
      return;
    }

    this.todoService.deleteTodo(this.todo.id);
    this.back();
  }
}