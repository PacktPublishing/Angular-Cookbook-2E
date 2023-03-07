import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BucketComponent } from './bucket/bucket.component';
import { BucketService } from './bucket/bucket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, BucketComponent],
})
export class AppComponent {
  store = inject(BucketService);
  bucketLength$ = this.store.bucketLength$;
}
