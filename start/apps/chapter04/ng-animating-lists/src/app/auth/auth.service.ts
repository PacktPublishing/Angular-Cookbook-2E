import { Injectable } from '@angular/core';
import { UserType } from '../constants/user-type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUserType: UserType | null = null;
  constructor() {
    this.loggedInUserType = window.localStorage.getItem('loggedIn') as UserType;
  }

  login(userType: UserType) {
    this.loggedInUserType = userType;
    window.localStorage.setItem('loggedIn', userType);
  }

  logout() {
    this.loggedInUserType = null;
    window.localStorage.removeItem('loggedIn');
  }

  isLoggedIn() {
    return (
      this.loggedInUserType === UserType.Admin ||
      this.loggedInUserType === UserType.Employee
    );
  }
}
