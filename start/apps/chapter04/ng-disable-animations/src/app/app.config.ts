import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InjectionToken } from '@angular/core';
export interface IEmployeeConfig {
  canDeleteItems: boolean;
}

export const EMPLOYEE_CONFIG = new InjectionToken<IEmployeeConfig>('EMPLOYEE_CONFIG');
export const employeeConfig: IEmployeeConfig = {
  canDeleteItems: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    {
      provide: EMPLOYEE_CONFIG,
      useValue: employeeConfig,
    },
  ],
};
