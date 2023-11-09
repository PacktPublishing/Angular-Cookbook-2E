import { createReducer, on } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';
import { BucketActions } from './bucket.actions';

export type BucketState = {
  isCIP: boolean;
  items: ReadonlyArray<IFruit>
}

export const initialState: BucketState = {
  isCIP: false,
  items: []
};

export const bucketReducer = createReducer(
  initialState,
  on(BucketActions.getBucket, BucketActions.addFruit, BucketActions.removeFruit, (state) => {
    return {
      ...state,
      isCIP: true
    };
  }),
  on(BucketActions.getBucketFailure, BucketActions.addFruitFailure, BucketActions.removeFruitFailure, (state) => {
    return {
      ...state,
      isCIP: false
    };
  }),
  on(BucketActions.getBucketSuccess, (state, { bucket }) => {
    return {
      isCIP: false,
      items: bucket
    };
  }),
  on(BucketActions.addFruitSuccess, (state, { fruit }) => {
    console.log({ fruit });
    return {
      isCIP: false,
      items: [fruit, ...state.items]
    };
  }),
  on(BucketActions.removeFruitSuccess, (state, { fruitId }) => {
    console.log({ fruitId });
    return {
      isCIP: false,
      items: state.items.filter((fr) => fr.id !== fruitId)
    };
  })
);
