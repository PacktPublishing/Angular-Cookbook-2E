import { createActionGroup, props } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const BucketActions = createActionGroup({
  source: 'Bucket',
  events: {
    'Add Fruit': props<{ fruit: IFruit }>(),
    'Remove Fruit': props<{ fruitId: number }>(),
  },
});
