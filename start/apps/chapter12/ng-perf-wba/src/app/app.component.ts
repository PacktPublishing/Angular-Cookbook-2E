import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppConfig, APP_CONFIG } from './app-config';
import { AuthService } from './auth/auth.service';
import * as moment from '../lib/moment'; 
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AppConfig,
    },
  ],
})
export class AppComponent {
  // DO NOT USE THE CODE BELOW IN PRODUCTION
  // IT WILL CAUSE PERFORMANCE ISSUES
  auth = inject(AuthService);
  router = inject(Router);

  constructor() { 
    const scene = new THREE.Scene();  
    console.log(moment().format('MMM Do YYYY')); 
    console.log(scene); 
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }
}
