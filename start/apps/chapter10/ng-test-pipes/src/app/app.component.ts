import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MultiplicationTableComponent } from './components/multiplication-table/multiplication-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    MultiplicationTableComponent,
  ],
})
export class AppComponent {
  digitValue = 1;
  maxFactorValue = 10;
}
