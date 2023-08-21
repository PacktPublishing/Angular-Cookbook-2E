import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { RouterModule } from '@angular/router';
import { randColor } from '@ngneat/falso';
import { RANDOMIZATION_COUNT } from '../../tokens';
import { LogsService } from '../../services/logs.service';
import { getRandomColorWorker } from '../../workers';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user!: IUser;
  @Input() index = 0;
  randomizationCount = inject(RANDOMIZATION_COUNT);
  logsService = inject(LogsService);
  worker: Worker = getRandomColorWorker();

  ngOnInit() {
    this.worker.onmessage = ({ data: { randomColor, email } }) => {
      console.log('received message from worker', randomColor, email);
    };
    this.worker.postMessage({ randomizationCount: this.randomizationCount, email: this.user.email });
  }

  get log() {
    return this.logsService.logs[this.user.email] ?? 0;
  }

  get randomColor() {
    this.logsService.updateLogEntry(this.user.email);
    let color;
    for (let i = 0; i < factorial(this.randomizationCount); i++) {
      color = randColor();
    }
    return color;
  }
}


function factorial(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
