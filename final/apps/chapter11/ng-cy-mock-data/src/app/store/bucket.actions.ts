import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const BucketActions = createActionGroup({
  source: 'Bucket',
  events: {
    'Get Bucket': emptyProps(),
    'Get Bucket Success': props<{ bucket: IFruit[] }>(),
    'Get Bucket Failure': props<{ error: string }>(),
    'Add Fruit': props<{ fruit: IFruit }>(),
    'Add Fruit Success': props<{ fruit: IFruit }>(),
    'Add Fruit Failure': props<{ error: string }>(),
    'Remove Fruit': props<{ fruitId: number }>(),
    'Remove Fruit Success': props<{ fruitId: number }>(),
    'Remove Fruit Failure': props<{ error: string }>(),
  },
});
