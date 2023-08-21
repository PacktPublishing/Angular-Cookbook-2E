import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { generateRandomColor } from '../../utils';
import { RANDOMIZATION_COUNT } from '../../tokens';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() index = 0;
  logsService = inject(LogsService);
  randomizationCount = inject(RANDOMIZATION_COUNT);

  get log() {
    return this.logsService.logs[this.user.email] ?? 0;
  }

  get randomColor() {
    this.logsService.updateLogEntry(this.user.email);
    return generateRandomColor(this.randomizationCount);
  }
}

