/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RatingComponent {
  @Input() value = 2;
  @Input() disabled = false;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  hoveredRating = 2;
  isMouseOver = false;

  get renderArr() {
    return new Array(5).fill(0).map((_, index) => index + 1);
  }

  onRatingMouseEnter(rating: number) {
    if (this.disabled) return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }
  onRatingMouseLeave() {
    this.hoveredRating = 0;
    this.isMouseOver = false;
  }

  selectRating(rating: number) {
    if (this.disabled) return;
    this.value = rating;
    this.valueChanged.emit(rating);
  }
}
