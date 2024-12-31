import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { TodoItem } from './todos.model';
import { computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

const todoStoreKey = 'ng_cookbook_todos';

type TodoFilter = 'all' | 'active' | 'completed';

type TodoState = {
  todos: TodoItem[];
  filter: TodoFilter;
  intialized: boolean;
};

const initialState: TodoState = {
  todos: [],
  filter: 'all',
  intialized: false,
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ todos, filter }) => ({
    completedTodos: computed(() =>
      todos().filter((todoItem) => {
        return todoItem.completed;
      })
    ),
    filteredTodos: computed(() => {
      switch (filter()) {
        case 'completed':
          return todos().filter((todoItem) => {
            return todoItem.completed;
          });
        case 'active':
          return todos().filter((todoItem) => {
            return !todoItem.completed;
          });

        default:
          return todos();
      }
    }),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    addTodo(newTodoTitle: string) {
      http
        .post<TodoItem>('https://jsonplaceholder.typicode.com/users/1/todos', {
          title: newTodoTitle,
          completed: false,
        })
        .subscribe((todo) => {
          patchState(store, {
            todos: [todo, ...store.todos()],
          });
        });
    },
    changeFilter(filter: TodoFilter) {
      console.log({ filter });
      patchState(store, {
        filter,
      });
    },
    toggleTodo(todoId: string) {
      const newCompleted = !store.todos().find((todo) => todo.id === todoId)
        ?.completed;
      http
        .patch<TodoItem>(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`,
          {
            completed: newCompleted,
          }
        )
        .subscribe(() => {
          patchState(store, {
            todos: store.todos().map((todoItem) => {
              if (todoItem.id === todoId) {
                return {
                  ...todoItem,
                  completed: newCompleted,
                };
              }
              return todoItem;
            }),
          });
        });
    },
  })),
  withHooks({
    onInit(store, http = inject(HttpClient)) {
      effect(() => {
        const state = getState(store);
        console.log('effect: ', state);
        if (state.intialized) {
          localStorage.setItem(todoStoreKey, JSON.stringify(state.todos));
        }
      });
      http
        .get<TodoItem[]>('https://jsonplaceholder.typicode.com/users/1/todos')
        .pipe(
          catchError((error) => {
            console.log('Error fetching todos:', error);
            const todosFromStorage = JSON.parse(
              localStorage.getItem(todoStoreKey) || '[]'
            );
            return of(todosFromStorage);
          })
        )
        .subscribe((todos) => {
          patchState(store, {
            todos,
            intialized: true,
          });
        });
    },
  })
);
