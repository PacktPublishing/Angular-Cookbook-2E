import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { AppConfig, APP_CONFIG } from './app-config';
import { AuthService } from './auth/auth.service';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, LoaderComponent],
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
  isRouting = true;

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRouting = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        this.isRouting = false;
      }
    })
  }

  get isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }
}
