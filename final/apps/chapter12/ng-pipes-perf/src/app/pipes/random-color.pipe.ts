import { Pipe, PipeTransform, inject } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { randColor } from '@ngneat/falso';
import { IUser } from '../interfaces/user.interface';

@Pipe({
  name: 'randomColor',
  standalone: true
})
export class RandomColorPipe implements PipeTransform {
  logsService = inject(LogsService);
  factorial(n: number): number {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  randomColor(email: string, randomizationCount: number) {
    this.logsService.updateLogEntry(email);
    let color;
    for (let i = 0; i < this.factorial(randomizationCount); i++) {
      color = randColor();
    }
    return color;
  }

  transform(randomizationCount: number, user: IUser): string | undefined {
    return this.randomColor(user.email, randomizationCount);
  }

}
