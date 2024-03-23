import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { UserType } from '../constants/user-type';

export const canActivateLogin: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();
  if (router.url === '/' && isLoggedIn) {
    const isAdmin = authService.loggedInUserType === UserType.Admin;
    router.navigate([`/${isAdmin ? 'admin' : 'employee'}`])
    return false
  }
  return !authService.isLoggedIn()
}

export const canActivateAdminOrEmployee: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();
  if (!isLoggedIn) {
    router.navigate(['/auth']);
    false
  }
  return true
};