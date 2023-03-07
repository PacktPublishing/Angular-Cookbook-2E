import { Injectable } from '@angular/core';
import { IFruit } from '../interfaces/fruit.interface';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  storeKey = 'bucket_ngrx-component-store';

  loadItems() {
    return JSON.parse(window.localStorage.getItem(this.storeKey) || '[]');
  }
  saveItems(items: IFruit[]) {
    window.localStorage.setItem(this.storeKey, JSON.stringify(items));
  }
}
