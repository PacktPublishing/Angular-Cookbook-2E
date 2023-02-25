import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import COLORS from '../colors';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';

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
  boxStyles$!: Observable<BoxStyles>;

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
    this.listenToInputChanges();
  }

  listenToInputChanges() {
    const controls: AbstractControl[] = [
      this.boxForm.controls.size,
      this.boxForm.controls.borderRadius,
      this.boxForm.controls.textColor,
      this.boxForm.controls.backgroundColor,
    ];
    this.boxStyles$ = combineLatest(
      controls.map((control) =>
        control.valueChanges.pipe(startWith(control.value))
      )
    ).pipe(
      map(([size, borderRadius, textColor, backgroundColor]) => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: backgroundColor,
          color: textColor,
          borderRadius: `${borderRadius}px`,
        };
      })
    );
  }
}
