import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { randColor } from '@ngneat/falso';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() index = 0;
  logsService = inject(LogsService);

  get randomColor() {
    this.logsService.updateLogEntry(this.user.email);
    let color;
    for (let i = 0; i < factorial(10); i++) {
      color = randColor();
    }
    return color;
  }

  get log() {
    return this.logsService.logs[this.user.email] ?? 0;
  }
}


function factorial(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
