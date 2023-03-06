import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ANIMATIONS } from '../animations';
import { Fruit } from '../constants/fruit';
import { IFruit } from '../interfaces/fruit.interface';
import { StoreModule, Store } from '@ngrx/store';
import { BucketActions } from '../store/bucket.actions';
import { selectBucket } from '../store/bucket.selectors';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss'],
  standalone: true,
  animations: [ANIMATIONS.LIST_ITEM_ANIMATION],
  imports: [CommonModule, FormsModule, StoreModule],
})
export class BucketComponent implements OnInit {
  selectedFruit: Fruit = '' as Fruit;
  fruits: string[] = Object.values(Fruit);
  store = inject(Store);
  $bucket: Observable<IFruit[]> = this.store.select(selectBucket);

  ngOnInit() {
    this.store.dispatch(BucketActions.getBucket());
  }

  addSelectedFruitToBucket() {
    const newFruit: IFruit = {
      id: Date.now(),
      name: this.selectedFruit,
    };
    this.store.dispatch(
      BucketActions.addFruit({
        fruit: newFruit,
      })
    );
  }
  deleteFromBucket(fruit: IFruit) {
    this.store.dispatch(
      BucketActions.removeFruit({
        fruitId: fruit.id,
      })
    );
  }
}
