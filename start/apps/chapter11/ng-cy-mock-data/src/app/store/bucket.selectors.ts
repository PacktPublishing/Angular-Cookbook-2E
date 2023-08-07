import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BucketState } from './bucket.reducer';

export const selectBucketState = createFeatureSelector<BucketState>('bucket');

export const selectBucketItems = createSelector(selectBucketState, (state) => {
  return state.items;
})

export const selectIsCIP = createSelector(selectBucketState, (state) => {
  return state.isCIP;
})

