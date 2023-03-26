import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withPreloading,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppPreloadStrategyService } from './app/app-preload-strategy.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation(), withPreloading(AppPreloadStrategyService)),
    provideAnimations()
  ],
}).catch((err) => console.error(err));
