import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkListboxModule , CdkMenu, CdkMenuItem, CdkMenuTrigger],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Output() colorChanged = new EventEmitter<string>();
  productForm = new FormGroup({
    color: new FormControl(null, [Validators.required])
  })
  menuPositions: ConnectedPosition[] = [
    {
      offsetY: 4,
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
    {
      offsetY: -4,
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
    },
  ]

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
