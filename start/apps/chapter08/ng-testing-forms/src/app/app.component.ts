import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VersionControlRfComponent } from './components/version-control-rf/version-control-rf.component';
import { VersionControlTdfComponent } from './components/version-control-tdf/version-control-tdf.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    VersionControlTdfComponent,
    VersionControlRfComponent,
  ],
})
export class AppComponent {}