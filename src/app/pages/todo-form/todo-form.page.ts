import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.page.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  host: {
    class: 'h-full',
  },
})
export class TodoFormPage implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly todoService = inject(TodoService);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);

  formGroup!: FormGroup;

  todo?: Todo;

  mode: 'create' | 'edit' = 'create';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.formGroup = this.fb.nonNullable.group({
        title: ['', [Validators.required]],
        content: ['', Validators.required],
      });
    } else {
      this.mode = 'edit';

      this.todo = this.todoService.getTodo(id);

      if (!this.todo) {
        this.router.navigateByUrl('');
      }

      this.formGroup = this.fb.nonNullable.group({
        title: [this.todo?.title, Validators.required],
        content: [this.todo?.content, Validators.required],
      });
    }
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      alert('폼을 다 채워주세요.');
      return;
    }
    this.formGroup.valid;

    this.formGroup.get('title')?.valid;
    // const valid = this.formGroup.get('title')?.valid && (this.formGroup.get('title')?.dirty || this.formGroup.get('title')?.touched);

    this.formGroup.touched, this.formGroup.dirty;

    const { title, content } = this.formGroup.value;

    if (this.mode === 'create') {
      this.todoService.createTodo({ title, content });
    } else {
      if (!this.todo) {
        return;
      }
      this.todoService.updateTodo(this.todo?.id, { title, content });
    }

    this.back();
  }
}
