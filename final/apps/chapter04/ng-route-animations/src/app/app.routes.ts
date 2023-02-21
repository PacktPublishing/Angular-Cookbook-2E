import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    data: { transitionState: 'HomePage' },
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    data: { transitionState: 'AboutPage' },
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
];
