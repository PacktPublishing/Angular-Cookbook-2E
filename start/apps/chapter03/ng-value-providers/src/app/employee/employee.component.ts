import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, BucketComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {}
