import { createReducer, on } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';
import { BucketActions } from './bucket.actions';

export const initialState: ReadonlyArray<IFruit> = [];

export const bucketReducer = createReducer(
  initialState,
  on(BucketActions.getBucketSuccess, (_state, { bucket }) => {
    return bucket;
  }),
  on(BucketActions.addFruitSuccess, (_state, { fruit }) => {
    console.log({ fruit });
    return [fruit, ..._state];
  }),
  on(BucketActions.removeFruitSuccess, (_state, { fruitId }) => {
    console.log({ fruitId });
    return _state.filter((fr) => fr.id !== fruitId);
  })
);
