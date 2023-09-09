import { Pipe, PipeTransform } from '@angular/core';
import { Task, TasksFilter } from '../interfaces';

@Pipe({
  name: 'tasksFilter',
  standalone: true,
})
export class TasksFilterPipe implements PipeTransform {
  transform(tasks: Task[], filter: TasksFilter): Task[] {
    if (filter === TasksFilter.All) {
      return tasks;
    }
    return tasks.filter(task => {
      return filter === TasksFilter.Completed ? task.completed : !task.completed;
    })
  }
}
