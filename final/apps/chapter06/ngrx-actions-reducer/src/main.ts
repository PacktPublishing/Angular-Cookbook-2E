import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { bucketReducer } from './app/store/bucket.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideStore({
      bucket: bucketReducer,
    }),
  ],
}).catch((err) => console.error(err));
