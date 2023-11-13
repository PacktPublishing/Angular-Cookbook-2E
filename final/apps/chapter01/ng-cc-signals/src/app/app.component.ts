import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { Task, TasksFilter } from './task.model';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SnackbarComponent],
})
export class AppComponent {
  @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;
  tasks = signal<Task[]>([
    { title: 'Buy milk', completed: false },
    { title: 'Read a book', completed: true },
  ]);
  filter = signal(TasksFilter.All);
  filters = TasksFilter;

  completedEffectRef = effect(() => {
    const tasks = this.tasks();
    if (this.finishedTasksCount() === tasks.length && tasks.length > 0) {
      this.snackbar.show();
    }
  })

  filteredTasks = computed(() => {
    switch(this.filter()) {
      case TasksFilter.All:
        return this.tasks();
      case TasksFilter.Active:
        return this.tasks().filter(taskItem => {
          return !taskItem.completed;
        });
      case TasksFilter.Completed:
        return this.tasks().filter(taskItem => {
          return taskItem.completed;
        });
    }
  })

  changeFilter(filter: TasksFilter) {
    this.filter.set(filter);
  }

  toggleTask(task: Task) {
    const updatedTasks = this.tasks().map(taskItem =>
      taskItem.title === task.title ? {...taskItem, completed: !taskItem.completed} : taskItem
    );
    this.tasks.set(updatedTasks);
  }

  finishedTasksCount = computed(() => {
    return this.tasks().filter(task => task.completed).length;
  })

  addTask(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      const newTask = {
        title: titleInput.value,
        completed: false
      };
      this.tasks.set([...this.tasks(), newTask]);
    }
    titleInput.value = '';
  }
}
