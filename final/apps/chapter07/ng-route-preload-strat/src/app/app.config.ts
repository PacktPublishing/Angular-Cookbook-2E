import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppPreloadStrategyService } from './app/app-preload-strategy.service';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withPreloading(AppPreloadStrategyService)
    ),
    provideAnimations(),
  ],
};
