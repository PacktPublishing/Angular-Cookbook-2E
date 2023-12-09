import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'user/:uuid',
    loadComponent: () => import('./user/user.component').then(m => m.UserComponent)
  },
];
