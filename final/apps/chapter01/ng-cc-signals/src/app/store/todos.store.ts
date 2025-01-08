import {
  getState,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { TodoItem } from './todos.model';
import { computed, effect, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

const todoStoreKey = 'ng_cookbook_todos';

type TodoFilter = 'all' | 'active' | 'completed';

type TodoState = {
  filter: TodoFilter;
  intialized: boolean;
  searchTerm: string;
};

const initialState: TodoState = {
  filter: 'all',
  intialized: false,
  searchTerm: '',
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps((store) => {
    return {
      _todosResource: resource<TodoItem[], string>({
        request: store.searchTerm,
        loader: async (params) => {
          const { request: searchTerm, abortSignal } = params;
          try {
            const resp = await fetch(
              'https://jsonplaceholder.typicode.com/users/1/todos',
              {
                signal: abortSignal,
              }
            );
            if (resp.status !== 200) {
              throw new Error(resp.status.toString());
            }
            const todos = (await resp.json()) as TodoItem[];
            patchState(store, {
              intialized: true,
            });
            return todos.filter((todo) =>
              todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
          } catch (err) {
            console.log('Error fetching todos:', err);
            // const todosFromStorage = JSON.parse(
            //   localStorage.getItem(todoStoreKey) || '[]'
            // ) as TodoItem[];
            // return todosFromStorage;
            throw err;
          }
          // return http
          //   .get<TodoItem[]>(
          //     'https://jsonplaceholder.typicode.com/users/1/todos'
          //   )
          //   .pipe(
          //     map((todos) => {
          //       patchState(store, {
          //         intialized: true,
          //       });
          //       return todos.filter((todo) =>
          //         todo.title.toLowerCase().includes(searchTerm.toLowerCase())
          //       );
          //     }),
          //     catchError((error) => {
          //       console.log('Error fetching todos:', error);
          //       const todosFromStorage = JSON.parse(
          //         localStorage.getItem(todoStoreKey) || '[]'
          //       ) as TodoItem[];
          //       return of(todosFromStorage);
          //     })
          //   );
        },
      }),
    };
  }),
  withComputed(({ filter, _todosResource }) => ({
    todos: computed(() => _todosResource.value() || []),
    todosLoading: computed(() => _todosResource.isLoading()),
    todosLoadingError: computed(() => _todosResource.error()),
    completedTodos: computed(
      () =>
        _todosResource.value()?.filter((todoItem) => {
          return todoItem.completed;
        }) || []
    ),
    filteredTodos: computed(() => {
      switch (filter()) {
        case 'completed':
          return (
            _todosResource.value()?.filter((todoItem) => {
              return todoItem.completed;
            }) || []
          );
        case 'active':
          return (
            _todosResource.value()?.filter((todoItem) => {
              return !todoItem.completed;
            }) || []
          );

        default:
          return _todosResource.value() || [];
      }
    }),
  })),
  withMethods((store, http = inject(HttpClient)) => ({
    updateSearchTerm(searchTerm: string) {
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
          store._todosResource.update((todos) => {
            if (!todos) {
              return [todo];
            }
            return [todo, ...todos];
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
      const newCompleted = !store._todosResource
        .value()
        ?.find((todo) => todo.id === todoId)?.completed;
      http
        .patch<TodoItem>(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`,
          {
            completed: newCompleted,
          }
        )
        .subscribe(() => {
          store._todosResource.update((todos) => {
            if (!todos) {
              return [];
            }
            return todos.map((todoItem) => {
              if (todoItem.id === todoId) {
                return {
                  ...todoItem,
                  completed: newCompleted,
                };
              }
              return todoItem;
            });
          });
        });
    },
  })),
  withHooks({
    onInit(store) {
      effect(() => {
        const state = getState(store);
        console.log('effect: ', state);
        if (state.intialized) {
          localStorage.setItem(todoStoreKey, JSON.stringify(store.todos()));
        }
      });
    },
  })
);
