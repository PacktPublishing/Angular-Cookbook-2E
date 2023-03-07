import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs/internal/Observable';
import { IFruit } from '../interfaces/fruit.interface';

export interface BucketState {
  bucket: IFruit[];
}

@Injectable({
  providedIn: 'root',
})
export class BucketService extends ComponentStore<BucketState> {
  storeKey = 'bucket_ngrx-component-store';
  readonly bucket$: Observable<IFruit[]> = this.select((state) => state.bucket);
  readonly bucketLength$: Observable<number> = this.select(
    (state) => state.bucket.length
  );

  constructor() {
    super({ bucket: [] });
    this.setState({
      bucket: this.loadItems(),
    });
  }

  readonly addItem = this.updater((state: BucketState, fruit: IFruit) => {
    const bucketUpdated = [fruit, ...state.bucket];
    this.saveItems(bucketUpdated);
    return {
      bucket: bucketUpdated,
    };
  });

  readonly removeItem = this.updater((state: BucketState, fruitId: number) => {
    const bucketUpdated = state.bucket.filter((fr) => fr.id !== fruitId);
    this.saveItems(bucketUpdated);
    return {
      bucket: bucketUpdated,
    };
  });

  loadItems() {
    return JSON.parse(window.localStorage.getItem(this.storeKey) || '[]');
  }
  saveItems(items: IFruit[]) {
    window.localStorage.setItem(this.storeKey, JSON.stringify(items));
  }
}
