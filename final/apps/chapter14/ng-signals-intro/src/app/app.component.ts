import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Task, TasksFilter } from './interfaces';
import { TasksFilterPipe } from './pipes/tasks-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, TasksFilterPipe],
})
export class AppComponent {
  tasks = signal<Task[]>([
    { title: 'Buy milk', completed: false },
    { title: 'Read a book', completed: true },
  ]);

  newTaskTitle = signal('');
  filter = signal(TasksFilter.All);
  filters = TasksFilter;

  finishedTasksCount = computed(() => {
    return this.tasks().filter(task => task.completed).length;
  })

  addTask(titleInput: HTMLInputElement) {
    this.newTaskTitle.set(titleInput.value);
    if (this.newTaskTitle()) {
      const newTask = { title: this.newTaskTitle(), completed: false };
      this.tasks.set([...this.tasks(), newTask]);
      this.newTaskTitle.set('');
    }
    titleInput.value = '';
  }

  toggleTask(task: Task) {
    const updatedTasks = this.tasks().map(taskItem => 
      taskItem.title === task.title ? {...taskItem, completed: !taskItem.completed} : taskItem
    );
    this.tasks.set(updatedTasks);
  }

  filterTasks(filter: TasksFilter) {
    this.filter.set(filter);
  }

}
