import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { BucketService } from '../bucket/bucket.service';
import { BucketActions } from './bucket.actions';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BucketEffects {
  toastr = inject(ToastrService);
  getBucket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.getBucket),
      exhaustMap(() =>
        this.bucketService.getBucket().pipe(
          map(({ bucket }) => {
            return BucketActions.getBucketSuccess({ bucket });
          }),
          catchError((error) => {
            this.toastr.error('Could not get bucket items');
            return of(BucketActions.getBucketFailure({ error }));
          })
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.addFruit),
      exhaustMap((action) =>
        this.bucketService.addItem(action.fruit).pipe(
          map(({ fruit }) => {
            this.toastr.success('Bucket item added');
            return BucketActions.addFruitSuccess({ fruit });
          }),
          catchError((error) => {
            this.toastr.error('Could not add bucket item');
            return of(BucketActions.addFruitFailure({ error }));
          })
        )
      )
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BucketActions.removeFruit),
      exhaustMap((action) =>
        this.bucketService.removeItem(action.fruitId).pipe(
          map(() => {
            this.toastr.success('Bucket item deleted');
            return BucketActions.removeFruitSuccess({ fruitId: action.fruitId })
          }),
          catchError(({ error }) => {
            this.toastr.error(`Could not delete bucket item: ${error.message}`);
            return of(BucketActions.removeFruitFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bucketService: BucketService
  ) { }
}
