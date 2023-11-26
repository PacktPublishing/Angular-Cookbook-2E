import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData: number[] = [];
  isStreamActive!: boolean;

  startStream() {
    this.isStreamActive = true;
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    const streamSource = interval(1500);
    streamSource
      .pipe(takeWhile(() => this.isStreamActive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log('first stream output', input);
      });
    secondStreamSource
      .pipe(takeWhile(() => this.isStreamActive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log('second stream output', input);
      });
    fastestStreamSource
      .pipe(takeWhile(() => this.isStreamActive))
      .subscribe((input) => {
        this.outputStreamData.push(input);
        console.log('fastest stream output', input);
      });
  }

  ngOnDestroy() {
    this.stopStream();
  }

  stopStream() {
    this.isStreamActive = false;
  }
}
