import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RatingComponent } from '../components/rating/rating.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RatingComponent]
})
export class HomeComponent implements OnInit {
  reviewForm = new FormGroup({
    comment: new FormControl('', {
      nonNullable: true
    }),
    rating: new FormControl(0, {
      nonNullable: true,
      validators: [ Validators.required, Validators.min(1), Validators.max(5) ]
    })
  })
  ratingDisabled = false;

  ngOnInit(): void {
    this.reviewForm.controls.rating
  }
 
  submitReview(form: FormGroup) {
    console.log(form.value);
    form.reset();
  }

  applyRating(value: number) {
    this.reviewForm.controls.rating.setValue(value);
  }
}
