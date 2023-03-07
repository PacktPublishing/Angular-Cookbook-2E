import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ANIMATIONS } from '../animations';
import { Fruit } from '../constants/fruit';
import { IFruit } from '../interfaces/fruit.interface';
import { BucketService } from './bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
  standalone: true,
  animations: [ANIMATIONS.LIST_ITEM_ANIMATION],
  imports: [CommonModule, FormsModule],
})
export class BucketComponent {
  selectedFruit: Fruit = '' as Fruit;
  fruits: string[] = Object.values(Fruit);
  store = inject(BucketService);
  bucket$ = this.store.bucket$;

  addSelectedFruitToBucket() {
    const newFruit: IFruit = {
      id: Date.now(),
      name: this.selectedFruit,
    };
    this.store.addItem(newFruit);
  }

  deleteFromBucket(fruit: IFruit) {
    this.store.removeItem(fruit.id);
  }
}
