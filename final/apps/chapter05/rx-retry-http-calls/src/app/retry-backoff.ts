import { of, pipe, throwError, timer } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';

export function retryBackoff(maxTries: number, delay: number) {
  return pipe(
    retry({
      delay: (error, retryCount) => {
        return (
          retryCount > maxTries ? throwError(() => error) : of(retryCount)
        ).pipe(
          map((i) => i * i),
          mergeMap((v) => timer(v * delay))
        );
      },
    })
  );
}
