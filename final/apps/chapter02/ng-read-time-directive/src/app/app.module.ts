import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ReadTimeDirective } from './directives/read-time.directive';

@NgModule({
  declarations: [AppComponent, ReadTimeDirective],
  imports: [
    HeaderComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
