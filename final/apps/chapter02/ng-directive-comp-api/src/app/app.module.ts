import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ButtonFilledDirective } from './directives/button-filled.directive';
import { ButtonOutlinedDirective } from './directives/button-outlined.directive';
import { ButtonWithTooltipDirective } from './directives/button-with-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    TooltipComponent,
    ButtonFilledDirective,
    ButtonOutlinedDirective,
    ButtonWithTooltipDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
