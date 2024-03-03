import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VersionControlComponent } from './components/version-control/version-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    VersionControlComponent,
  ],
})
export class AppComponent {}
