import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Router, RouterModule } from '@angular/router';
import { UserType } from '../constants/user-type';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    const userType = this.auth.loggedInUserType;
    if (!userType) {
      return;
    }
    this.naviageToUserRoute(userType);
  }

  naviageToUserRoute(userType: UserType) {
    switch (userType) {
      case UserType.Admin:
        this.router.navigate(['/admin']);
        break;
      case UserType.Employee:
        this.router.navigate(['/employee']);
    }
  }

  loginAsAdmin() {
    const userType = UserType.Admin;
    this.auth.login(userType);
    this.naviageToUserRoute(userType);
  }

  loginAsEmployee() {
    const userType = UserType.Employee;
    this.auth.login(userType);
    this.naviageToUserRoute(userType);
  }
}
