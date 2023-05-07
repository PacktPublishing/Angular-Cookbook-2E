import { inject, Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  auth = inject(AuthService);
  router = inject(Router);
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loggedIn = !!this.auth.isLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
