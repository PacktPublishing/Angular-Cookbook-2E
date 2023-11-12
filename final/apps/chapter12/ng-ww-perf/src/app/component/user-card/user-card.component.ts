import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { generateRandomColor } from '../../utils';
import { RANDOMIZATION_COUNT } from '../../tokens';
import { RandomColorOutgoingEvent , getRandomColorWorker } from '../../workers/random-color.worker';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user!: IUser;
  @Input() index = 0;
  logsService = inject(LogsService);
  randomizationCount = inject(RANDOMIZATION_COUNT);
  randomColor = '';
  worker: Worker | null = getRandomColorWorker();

  get log() {
    return this.logsService.logs[this.user.email] ?? 0;
  }

  ngOnInit(): void {
    if(!this.worker) {
      return;
    }
    this.worker.onmessage = ({ data: { color } }: RandomColorOutgoingEvent) => {
      console.log(
        `received color ${color} from worker for user ${this.user.email}`
      );
      this.logsService.updateLogEntry(this.user.email);
      this.randomColor = color;
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'].currentValue !== changes['user'].previousValue) {
      if (!this.worker) {
        this.randomColor = generateRandomColor(this.randomizationCount);
        return;
      }
      this.worker.postMessage({ randomizationCount: this.randomizationCount });
    }
  }

  ngOnDestroy(): void {
    this.worker?.terminate();
  }
}

