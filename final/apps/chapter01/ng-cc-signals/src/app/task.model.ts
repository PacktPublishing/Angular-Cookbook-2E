export type Task = {
  completed: boolean;
  title: string;
}

export enum TasksFilter {
  All,
  Active,
  Completed
}
