import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
  standalone: true,
  imports: [CommonModule, VcLogsComponent, ReactiveFormsModule],
})
export class VersionControlComponent {
  versionInput = '';
  versionName = '0.0.0';
  versionPattern = '([0-9]+)\\.([0-9]+)\\.([0-9]+)';
  versionForm = new FormGroup({
    version: new FormControl('', [
      Validators.required,
      Validators.pattern(this.versionPattern),
    ]),
  });

  formSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.versionName = form.controls['version'].value;
  }
}
