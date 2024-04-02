import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/todo-list/todo-list.page').then(c => c.TodoListPage)
  },
  {
    path: 'form',
    loadComponent: () => import('./pages/todo-form/todo-form.page').then(c => c.TodoFormPage)
  },
  {
    path: 'form/:id',
    loadComponent: () => import('./pages/todo-form/todo-form.page').then(c => c.TodoFormPage)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/todo-detail/todo-detail.page').then(c => c.TodoDetailPage)
  }
];
