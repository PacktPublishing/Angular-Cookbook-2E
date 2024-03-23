import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-value-guesser',
  templateUrl: './value-guesser.component.html',
  styleUrls: ['./value-guesser.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ValueGuesserComponent {
  @Output() valueGuessed = new EventEmitter<number>();
  selected: number | null = null;

  reset() {
    this.selected = null;
  }

  guessValue(value: number) {
    this.selected = value;
    this.valueGuessed.emit(value);
  }
}
