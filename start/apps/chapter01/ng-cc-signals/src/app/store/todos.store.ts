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
import { computed, effect } from '@angular/core';

const todoStoreKey = 'ng_cookbook_todos';

type TodoFilter = 'all' | 'active' | 'completed';

type TodoState = {
  todos: TodoItem[];
  filter: TodoFilter;
};

const initialState: TodoState = {
  todos: [],
  filter: 'all',
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
  withMethods((store) => ({
    addTodo(newTodoTitle: string) {
      patchState(store, {
        todos: [
          {
            title: newTodoTitle,
            id: Date.now().toString(),
            completed: false,
          },
          ...store.todos(),
        ],
      });
    },
    changeFilter(filter: TodoFilter) {
      console.log({ filter });
      patchState(store, {
        filter,
      });
    },
    toggleTodo(todoId: string) {
      patchState(store, {
        todos: store.todos().map((todoItem) => {
          if (todoItem.id === todoId) {
            return {
              ...todoItem,
              completed: !todoItem.completed,
            };
          }
          return todoItem;
        }),
      });
    },
  })),
  withHooks({
    onInit(store) {
      effect(() => {
        const state = getState(store);
        console.log('effect: ', state);
        localStorage.setItem(todoStoreKey, JSON.stringify(state.todos));
      });
      // watchState(store, ({ todos }) => {
      //   localStorage.setItem(todoStoreKey, JSON.stringify(todos));
      // });
      const todosFromStorage = JSON.parse(
        localStorage.getItem(todoStoreKey) || '[]'
      );
      patchState(store, {
        todos: todosFromStorage,
      });
    },
  })
);
