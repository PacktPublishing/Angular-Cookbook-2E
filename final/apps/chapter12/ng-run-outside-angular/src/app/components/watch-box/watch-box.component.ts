import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WatchComponent } from '../watch/watch.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watch-box',
  templateUrl: './watch-box.component.html',
  styleUrls: ['./watch-box.component.scss'],
  standalone: true,
  imports: [CommonModule, WatchComponent, FormsModule]
})
export class WatchBoxComponent implements OnInit {
  name = '';
  time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };
  intervalTimer!: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.intervalTimer = setInterval(() => {
      this.timer();
    }, 1);
  }

  timer() {
    const now = new Date();
    this.time = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
    };
  }
}
