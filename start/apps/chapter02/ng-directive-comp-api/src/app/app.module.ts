import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ButtonDirective } from './directives/button.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { BlueButtonComponent } from './components/blue-button/blue-button.component';
import { PurpleOutlineButtonComponent } from './components/purple-outline-button/purple-outline-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ButtonDirective,
    TooltipDirective,
    TooltipComponent,
    BlueButtonComponent,
    PurpleOutlineButtonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
