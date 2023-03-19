import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { UserType } from '../constants/user-type';
import { delay, map, of } from "rxjs";

const FAKE_DELAY = 2000;

export const canActivateWithRole = (type: UserType) => {
  return () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const isLoggedIn = authService.isLoggedIn();
    return of(null).pipe(
      delay(FAKE_DELAY),
      map(() => {
        if (isLoggedIn && authService.loggedInUserType === type) {
          return true;
        } else if (!isLoggedIn) {
          router.navigate(['/auth']);
          false
        }
        return false
      })
    )
  }
}

export const canActivateLogin: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoggedIn = authService.isLoggedIn();
  return of(null).pipe(
    delay(FAKE_DELAY),
    map(() => {
      if (router.url === '/' && isLoggedIn) {
        const isAdmin = authService.loggedInUserType === UserType.Admin;
        router.navigate([`/${isAdmin ? 'admin' : 'employee'}`])
        return false
      }
      return !authService.isLoggedIn()
    })
  )
}

// export const canActivateAdmin: CanActivateFn = () => {
//   const router = inject(Router);
//   const authService = inject(AuthService);
//   const isLoggedIn = authService.isLoggedIn();
//   return of(null).pipe(
//     delay(FAKE_DELAY),
//     map(() => {
//       if (isLoggedIn && authService.loggedInUserType === UserType.Admin) {
//         return true;
//       } else if (!isLoggedIn) {
//         router.navigate(['/auth']);
//         false
//       }
//       return false
//     })
//   )
// };

// export const canActivateEmployee: CanActivateFn = () => {
//   const router = inject(Router);
//   const authService = inject(AuthService);
//   const isLoggedIn = authService.isLoggedIn();
//   return of(null).pipe(
//     delay(FAKE_DELAY),
//     map(() => {
//       if (isLoggedIn && authService.loggedInUserType === UserType.Employee) {
//         return true;
//       } else if (!isLoggedIn) {
//         router.navigate(['/auth']);
//         false
//       }
//       return false
//     })
//   )
// };