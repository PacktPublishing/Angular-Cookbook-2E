import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CounterComponent implements OnInit {
  counter = 0;
  MAX_VALUE = 10;
  MIN_VALUE = -10;
  counterService = inject(CounterService);

  ngOnInit(): void {
    this.counter = this.counterService.getFromStorage();
  }

  increment() {
    this.counter++;
    if (this.counter > this.MAX_VALUE) {
      alert('Value too high');
      this.counter = this.MAX_VALUE;
    }
    this.counterService.saveToStorage(this.counter);
  }

  decrement() {
    this.counter--;
    if (this.counter < this.MIN_VALUE) {
      alert('Value too low');
      this.counter = this.MIN_VALUE;
    }
    this.counterService.saveToStorage(this.counter);
  }

  reset() {
    this.counter = 0;
    this.counterService.saveToStorage(this.counter);
  }
}
