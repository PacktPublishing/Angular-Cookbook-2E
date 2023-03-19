import { Route } from '@angular/router';
import { canActivateAdminOrEmployee, canActivateLogin } from './auth/auth.guards';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
      canActivate: [canActivateLogin]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
      canActivate: [canActivateAdminOrEmployee]
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent),
      canActivate: [canActivateAdminOrEmployee]

  },
];
