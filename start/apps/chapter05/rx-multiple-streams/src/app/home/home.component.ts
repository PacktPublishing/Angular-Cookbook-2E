import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import COLORS from '../colors';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface BoxStyles {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  borderRadius: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sizeOptions = [100, 200, 300, 400, 500, 600, 700];
  colorOptions = COLORS;
  borderRadiusOptions = [4, 6, 8, 10, 12, 14, 16, 18, 20];
  boxStyles!: BoxStyles;

  boxForm = new FormGroup({
    size: new FormControl<number>(this.sizeOptions[0], { nonNullable: true }),
    borderRadius: new FormControl<number>(this.borderRadiusOptions[0], {
      nonNullable: true,
    }),
    textColor: new FormControl(this.colorOptions[9], { nonNullable: true }),
    backgroundColor: new FormControl(this.colorOptions[3], {
      nonNullable: true,
    }),
  });

  ngOnInit() {
    this.applyChanges();
  }

  setBoxStyles(style: BoxStyles) {
    this.boxStyles = {
      width: `${style.width}px`,
      height: `${style.height}px`,
      backgroundColor: style.backgroundColor,
      color: style.color,
      borderRadius: `${style.borderRadius}px`,
    };
  }

  applyChanges() {
    const size = this.boxForm.controls.size.value.toString();
    const borderRadius = this.boxForm.controls.borderRadius.value.toString();
    this.setBoxStyles({
      width: size,
      height: size,
      backgroundColor: this.boxForm.controls.backgroundColor.value,
      color: this.boxForm.controls.textColor.value,
      borderRadius: borderRadius,
    });
  }
}
