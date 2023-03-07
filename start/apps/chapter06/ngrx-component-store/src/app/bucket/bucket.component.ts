import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ANIMATIONS } from '../animations';
import { Fruit } from '../constants/fruit';
import { IFruit } from '../interfaces/fruit.interface';

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
  bucket: IFruit[] = [];

  addSelectedFruitToBucket() {
    const newFruit: IFruit = {
      id: Date.now(),
      name: this.selectedFruit,
    };
    this.bucket.push(newFruit);
  }

  deleteFromBucket(fruit: IFruit) {
    this.bucket = this.bucket.filter((fr) => {
      return fr.id !== fruit.id;
    });
  }
}
