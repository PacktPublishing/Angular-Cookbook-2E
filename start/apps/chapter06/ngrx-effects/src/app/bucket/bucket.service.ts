import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFruit } from '../interfaces/fruit.interface';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  http = inject(HttpClient);
  apiBaseUrl = 'http://localhost:3333/api/bucket';
  getBucket() {
    return this.http.get<{ bucket: IFruit[] }>(this.apiBaseUrl);
  }

  addItem(item: IFruit) {
    return this.http.post<{ fruit: IFruit }>(this.apiBaseUrl, item);
  }

  removeItem(fruitId: number) {
    return this.http.delete<{ success: boolean }>(
      `${this.apiBaseUrl}/${fruitId}`
    );
  }
}
