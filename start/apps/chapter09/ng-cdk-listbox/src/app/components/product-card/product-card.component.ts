import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  productForm = new FormGroup({
    color: new FormControl('', [Validators.required])
  })

  constructor() {
    this.productForm.valueChanges.subscribe(val => {
      console.log('value changed', val);
    })
  }

  formSubmit(form: FormGroup) {
    console.log({
      value: form.value
    });
  }
}
