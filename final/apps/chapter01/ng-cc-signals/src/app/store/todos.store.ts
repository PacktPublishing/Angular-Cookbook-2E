import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { TodoItem } from './todos.model';
import { computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

const todoStoreKey = 'ng_cookbook_todos';

type TodoFilter = 'all' | 'active' | 'completed';

type TodoState = {
  searchTerm: string;
  todos: TodoItem[];
  filter: TodoFilter;
  intialized: boolean;
};

const initialState: TodoState = {
  searchTerm: '',
  todos: [],
  filter: 'all',
  intialized: false,
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps((store, http = inject(HttpClient)) => ({
    _todosResource: rxResource<TodoItem[], string>({
      request: store.searchTerm,
      loader: (params) => {
        const { request: searchTerm, abortSignal } = params;
        return http
          .get<TodoItem[]>('https://jsonplaceholder.typicode.com/users/1/todos')
          .pipe(
            map((todos) => {
              return todos.filter((todo) =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
              );
            }),
            catchError((error) => {
              console.log('Error fetching todos:', error);
              const todosFromStorage = JSON.parse(
                localStorage.getItem(todoStoreKey) || '[]'
              ) as TodoItem[];
              return of(todosFromStorage);
            })
          );
      },
    }),
  })),
  withComputed(({ todos, filter, _todosResource }) => ({
    completedTodos: computed(
      () =>
        _todosResource.value()?.filter((todoItem) => {
          return todoItem.completed;
        }) || []
    ),
    filteredTodos: computed(() => {
      if (!_todosResource.hasValue()) {
        return [];
      }
      switch (filter()) {
        case 'completed':
          return _todosResource.value()?.filter((todoItem) => {
            return todoItem.completed;
          });
        case 'active':
          return _todosResource.value()?.filter((todoItem) => {
            return !todoItem.completed;
          });

        default:
          return _todosResource.value() || [];
      }
    }),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    updateSearch(searchTerm: string) {
      patchState(store, {
        searchTerm: searchTerm,
      });
    },
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
