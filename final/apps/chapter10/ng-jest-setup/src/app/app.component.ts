import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
