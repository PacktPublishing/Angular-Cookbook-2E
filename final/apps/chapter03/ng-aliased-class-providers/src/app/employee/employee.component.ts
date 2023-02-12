import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';
import { BucketService } from '../bucket/bucket.service';
import { EmployeeBucketService } from './employee-bucket.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, BucketComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    {
      provide: BucketService,
      useClass: EmployeeBucketService,
    },
  ],
})
export class EmployeeComponent {}
