import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkListboxModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Output() colorChanged = new EventEmitter<string>();
  productForm = new FormGroup({
    color: new FormControl(null, [Validators.required])
  })

  constructor() {
    this.productForm.valueChanges.subscribe(val => {
      console.log('value changed', val);
      if (!(val.color)) {
        return;
      }
      this.colorChanged.emit(val.color);
    })
  }

  formSubmit(form: typeof this.productForm) {
    alert(JSON.stringify({
      value: form.value
    }));
  }
}
