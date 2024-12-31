import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { TodoStore } from './store/todos.store';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    CommonModule,
    RouterModule,
    HeaderComponent,
    SnackbarComponent,
  ],
})
export class AppComponent {
  newTodoTitle = signal('');
  store = inject(TodoStore);
  searchTerm = signal('');
  snackbar = viewChild.required(SnackbarComponent);

  constructor() {
    effect(() => {
      const allCompleted = this.store
        .todos()
        .every((todoItem) => todoItem.completed);
      if (allCompleted) {
        this.snackbar().show();
      }
    });
  }

  submitNewTodo() {
    this.store.addTodo(this.newTodoTitle());
    this.newTodoTitle.set('');
  }
}
