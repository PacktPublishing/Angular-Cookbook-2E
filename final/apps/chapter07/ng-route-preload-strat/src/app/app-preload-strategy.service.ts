import { inject, Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { UserType } from './constants/user-type';

@Injectable({
  providedIn: 'root'
})
export class AppPreloadStrategyService implements PreloadingStrategy {
  auth = inject(AuthService);
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const isLoggedIn = this.auth.isLoggedIn();
    if (!isLoggedIn) {
      return of(null)
    }
    const isAdmin = this.auth.loggedInUserType === UserType.Admin;
    if (
      (isAdmin && route.data?.['loadForAdmin']) || 
      (!isAdmin && route.data?.['loadForEmployee'])
    ) {
      return this.logAndLoad(route, load);
    }
    return of(null)
  }

  logAndLoad(route: Route, load: () => Observable<any>) {
    console.log(`Preloading route: ${route.path}`);
    return load();
  }

}
