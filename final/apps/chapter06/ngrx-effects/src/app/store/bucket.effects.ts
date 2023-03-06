import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { BucketService } from '../bucket/bucket.service';
import { BucketActions } from './bucket.actions';

@Injectable()
export class BucketEffects {
  getBucket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.getBucket),
      exhaustMap(() =>
        this.bucketService.getBucket().pipe(
          map(({ bucket }) => BucketActions.getBucketSuccess({ bucket })),
          catchError((error) => of(BucketActions.getBucketFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.addFruit),
      exhaustMap((action) =>
        this.bucketService.addItem(action.fruit).pipe(
          map(({ fruit }) => BucketActions.addFruitSuccess({ fruit })),
          catchError((error) => of(BucketActions.addFruitFailure({ error })))
        )
      )
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.removeFruit),
      exhaustMap((action) =>
        this.bucketService.removeItem(action.fruitId).pipe(
          map(() =>
            BucketActions.removeFruitSuccess({ fruitId: action.fruitId })
          ),
          catchError((error) => of(BucketActions.removeFruitFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bucketService: BucketService
  ) {}
}
