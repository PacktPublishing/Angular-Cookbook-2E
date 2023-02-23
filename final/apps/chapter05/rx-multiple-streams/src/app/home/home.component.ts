import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import COLORS from '../colors';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, Observable } from 'rxjs';

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
  cdRef = inject(ChangeDetectorRef);
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
    this.cdRef.detectChanges();
    this.boxForm.reset();
  }

  listenToInputChanges() {
    this.boxStyles$ = combineLatest([
      this.boxForm.controls.size.valueChanges,
      this.boxForm.controls.borderRadius.valueChanges,
      this.boxForm.controls.backgroundColor.valueChanges,
      this.boxForm.controls.textColor.valueChanges,
    ]).pipe(
      map(([size, borderRadius, backgroundColor, color]) => {
        return {
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor,
          color,
          borderRadius: `${borderRadius}px`,
        };
      })
    );
  }
}
