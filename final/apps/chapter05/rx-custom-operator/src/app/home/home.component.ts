import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, merge, Observable, scan, takeWhile } from 'rxjs';
import logWithLabel from '../log-with-label';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData: number[] = [];
  isStreamActive!: boolean;
  streamsOutput$!: Observable<number[]>;

  startStream() {
    this.isStreamActive = true;
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    const streamSource = interval(1500);
    this.streamsOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
    ).pipe(
      takeWhile(() => this.isStreamActive),
      scan((acc, next) => {
        return [...acc, next];
      }, [] as number[]),
      logWithLabel('stream-output')
    );
  }

  stopStream() {
    this.isStreamActive = false;
  }
}
