/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooleanInput, NumberInput, coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RatingComponent {
  @Input() value = 2;
  @Input() get disabled () {
    return this._disabled;
  }
  set disabled (val: BooleanInput) {
    this._disabled = coerceBooleanProperty(val);
  }
  private _disabled = false;
  @Input() get max () {
    return this._max;
  }
  set max (val: NumberInput) {
    this._max = coerceNumberProperty(val);
  }
  private _max = 5;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  hoveredRating = 2;
  isMouseOver = false;

  get renderArr() {
    return new Array(this.max).fill(0).map((_, index) => index + 1);
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
