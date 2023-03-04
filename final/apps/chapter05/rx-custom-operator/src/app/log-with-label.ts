import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

const logWithLabel = <T>(
  label: string
): ((source$: Observable<T>) => Observable<T>) => {
  return (source$) => source$.pipe(tap((value) => console.log(label, value)));
};

export default logWithLabel;
