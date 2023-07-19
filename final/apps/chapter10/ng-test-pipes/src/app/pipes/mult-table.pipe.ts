import { Pipe, PipeTransform } from '@angular/core';

type PipeResp = {
  digit: number;
  factor: number;
  result: number;
}

@Pipe({
  name: 'multTable',
  standalone: true,
})
export class MultTablePipe implements PipeTransform {
  transform(_value: unknown , digit: number, limit: number): PipeResp[] {
    if (!digit || !limit) {
      return [];
    }
    return new Array(Math.floor(limit)).fill(0).map((_, index) => {
      return {
        digit: digit,
        factor: index + 1,
        result: digit * (index + 1)
      }
    });
  }
}
