import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  subscription!: Subscription;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  outputStreamData: number[] = [];

  startStream() {
    const streamSource = interval(1500);
    this.subscription = streamSource.subscribe((input) => {
      this.outputStreamData.push(input);
    });
  }

  stopStream() {
    this.subscription.unsubscribe();
  }
}
