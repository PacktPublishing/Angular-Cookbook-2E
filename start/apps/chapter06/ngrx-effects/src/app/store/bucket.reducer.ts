import { createReducer, on } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';
import { BucketActions } from './bucket.actions';

export const initialState: ReadonlyArray<IFruit> = [];

export const bucketReducer = createReducer(
  initialState,
  on(BucketActions.addFruit, (_state, { fruit }) => {
    console.log({ fruit });
    return [fruit, ..._state];
  }),
  on(BucketActions.removeFruit, (_state, { fruitId }) => {
    console.log({ fruitId });
    return _state.filter((fr) => fr.id !== fruitId);
  })
);
