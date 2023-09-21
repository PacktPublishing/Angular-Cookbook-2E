import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';
import { EMPLOYEE_CONFIG } from '../app.config';
import { employeeConfig } from './employee.config';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, BucketComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    {
      provide: EMPLOYEE_CONFIG,
      useValue: employeeConfig,
    },
  ],
})
export class EmployeeComponent {}
