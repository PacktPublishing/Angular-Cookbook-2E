import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { RANDOMIZATION_COUNT } from '../../tokens';
import { LogsService } from '../../services/logs.service';
import { RandomColorPipe } from '../../pipes/random-color.pipe';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule, RandomColorPipe],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() index = 0;
  randomizationCount = inject(RANDOMIZATION_COUNT);
  logsService = inject(LogsService);

  get log() {
    return this.logsService.logs[this.user.email] ?? 0;
  }
}

