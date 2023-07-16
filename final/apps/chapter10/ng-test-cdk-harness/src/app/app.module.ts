import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    VcLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
