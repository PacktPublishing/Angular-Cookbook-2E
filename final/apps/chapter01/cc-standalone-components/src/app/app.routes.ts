import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: ':uuid',
    loadComponent: () =>
      import('./user-details/user-details.component').then(
        (m) => m.UserDetailsComponent
      ),
  },
];
