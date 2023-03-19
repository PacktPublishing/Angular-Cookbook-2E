import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';
import { APP_CONFIG } from '../app-config';
import { EmployeeConfig } from './employee.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, BucketComponent, RouterModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: EmployeeConfig,
    },
  ],
})
export class EmployeeComponent {}
