import { Route } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:uuid',
    component: UserComponent,
  },
];
