import { Injectable } from '@angular/core';
import { IFruit } from '../interfaces/fruit.interface';
import { IBucketService } from '../interfaces/bucket-service';

@Injectable({
  providedIn: 'root',
})
export class BucketService implements IBucketService {
  storeKey = 'bucket_ngrx-selectors';

  loadItems() {
    return JSON.parse(window.localStorage.getItem(this.storeKey) || '[]');
  }
  saveItems(items: IFruit[]) {
    window.localStorage.setItem(this.storeKey, JSON.stringify(items));
  }
}
