
import { IFruit } from './fruit.interface';
export interface IBucketService {
  loadItems(): void;
  saveItems(fruit: IFruit[]): void;
}
