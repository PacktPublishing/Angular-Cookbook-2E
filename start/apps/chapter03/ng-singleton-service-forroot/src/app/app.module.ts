import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NotificationsButtonComponent } from './components/notifications-button/notifications-button.component';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [AppComponent, NotificationsButtonComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
