import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, merge, Observable, scan, takeWhile, tap } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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
      tap((output) => console.log('output', output))
    );
  }

  stopStream() {
    this.isStreamActive = false;
  }
}
