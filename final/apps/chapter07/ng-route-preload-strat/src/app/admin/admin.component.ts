import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from '../bucket/bucket.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, BucketComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {}
