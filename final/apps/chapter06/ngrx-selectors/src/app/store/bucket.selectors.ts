import { createFeatureSelector } from '@ngrx/store';
import { IFruit } from '../interfaces/fruit.interface';

export const selectBucket = createFeatureSelector<IFruit[]>('bucket');
