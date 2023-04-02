import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control-rf',
  standalone: true,
  imports: [CommonModule, VcLogsComponent, ReactiveFormsModule],
  templateUrl: './version-control-rf.component.html',
  styleUrls: ['./version-control-rf.component.scss'],
})
export class VersionControlRfComponent {
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
