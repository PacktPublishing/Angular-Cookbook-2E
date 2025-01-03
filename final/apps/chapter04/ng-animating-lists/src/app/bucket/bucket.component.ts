import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { APP_CONFIG } from '../app-config';
import { Fruit } from '../constants/fruit';
import { IFruit } from '../interfaces/fruit.interface';
import { BucketService } from './bucket.service';
import { ANIMATIONS } from '../animations';

@Component({
    selector: 'app-bucket',
    templateUrl: './bucket.component.html',
    styleUrls: ['./bucket.component.scss'],
    imports: [CommonModule, FormsModule],
    animations: [ANIMATIONS.LIST_ITEM_ANIMATION]
})
export class BucketComponent implements OnInit {
  bucketService = inject(BucketService);
  appConfig = inject(APP_CONFIG);
  $bucket: Observable<IFruit[]> = this.bucketService.$bucket;
  selectedFruit: Fruit = '' as Fruit;
  fruits: string[] = Object.values(Fruit);

  ngOnInit(): void {
    this.bucketService.loadItems();
  }

  addSelectedFruitToBucket() {
    this.bucketService.addItem({
      id: Date.now(),
      name: this.selectedFruit,
    });
  }
  deleteFromBucket(fruit: IFruit) {
    this.bucketService.removeItem(fruit);
  }
}
