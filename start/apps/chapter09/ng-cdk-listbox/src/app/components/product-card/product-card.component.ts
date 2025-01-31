import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-product-card',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Output() colorChanged = new EventEmitter<string>();
  productForm = new FormGroup({
    color: new FormControl('space-gray', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  constructor() {
    this.productForm.valueChanges.subscribe(val => {
      console.log('value changed', val);
      this.colorChanged.emit(val.color);
    })
  }

  ngOnInit(): void {
    this.colorChanged.emit(this.productForm.controls.color.value);
  }

  formSubmit(form: typeof this.productForm) {
    alert(JSON.stringify({
      value: form.value
    }));
  }
}
