import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild, inject } from '@angular/core';
import { WatchTimeComponent } from '../watch-time/watch-time.component';

declare let window: any;

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  standalone: true,
  imports: [CommonModule, WatchTimeComponent]
})
export class WatchComponent implements OnInit {
  @Input() name = '';
  @Input() hours = 0;
  @Input() minutes = 0;
  @Input() seconds = 0;
  @Input() milliseconds = 0;
  @ViewChild('stopWatch') stopWatch!: ElementRef;
  hover = true;
  xCoordinate = 0;
  yCoordinate = 0;
  minSpeed = 1;
  maxSpeed = 3;
  xVelocity;
  yVelocity;
  intervalTimer!: ReturnType<typeof setTimeout>;
  zone = inject(NgZone);
  constructor() {
    this.xVelocity = this.minSpeed;
    this.yVelocity = this.minSpeed;
  }

  get greetingMessage() {
    window['appLogs']['watchComponentRender']++;
    return this.name ? `Greetings ${this.name}` : '';
  }

  ngOnInit(): void {
    if (!window['appLogs']) {
      window['appLogs'] = {};
    }
    window['appLogs']['watchComponentRender'] = 0;
    this.zone.runOutsideAngular(() => {
      this.intervalTimer = setInterval(() => {
        this.animate();
      }, 30);
    });
  }

  calcSpeed() {
    return Math.ceil(Math.random() * this.maxSpeed + this.minSpeed);
  }

  animate() {
    const el = this.stopWatch.nativeElement;
    const width = el.clientWidth;
    const height = el.clientHeight;
    const speed = this.calcSpeed();
    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;
    el.style.setProperty('--x', `${this.xCoordinate}px`);
    el.style.setProperty('--y', `${this.yCoordinate}px`);
    if (this.xCoordinate >= width) {
      this.xVelocity = speed * -1;
    } else if (this.xCoordinate <= 0) {
      this.xVelocity = speed;
    } else if (this.yCoordinate >= height) {
      this.yVelocity = speed * -1;
    } else if (this.yCoordinate <= 0) {
      this.yVelocity = speed;
    }
  }
}
