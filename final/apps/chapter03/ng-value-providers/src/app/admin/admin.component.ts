import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, BucketComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {}
