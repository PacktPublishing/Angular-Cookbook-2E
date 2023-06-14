import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'folders-list',
},
{
  path: 'folders-list',
  loadComponent: () => import('./folders-list/folders-list.component').then(m => m.FoldersListComponent),
},];
