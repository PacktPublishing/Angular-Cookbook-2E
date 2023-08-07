import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IFruit } from '../interfaces';
import BUCKET from './data/bucket';

let bucketInMemory = [...BUCKET];

@Injectable()
export class BucketService {
  getBucket() {
    return { bucket: bucketInMemory };
  }

  addItem(fruit: IFruit) {
    bucketInMemory = [fruit, ...bucketInMemory];
    return {
      fruit,
    };
  }

  removeItem(fruitId: number) {
    const itemFound = bucketInMemory.find((fruit) => fruit.id === fruitId)
    if (!itemFound) {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }
    bucketInMemory = bucketInMemory.filter((fruit) => fruit.id !== fruitId);
    return {
      success: true,
    };
  }
}
