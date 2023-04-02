import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';
import { FormValidationService } from '../../form-validation.service';

@Component({
  selector: 'app-version-control-rf-async',
  standalone: true,
  imports: [CommonModule, VcLogsComponent, ReactiveFormsModule],
  templateUrl: './version-control-rf-async.component.html',
  styleUrls: ['./version-control-rf-async.component.scss'],
})
export class VersionControlRfAsyncComponent implements OnInit {
  versionInput = '';
  versionName = '0.0.0';
  versionForm = new FormGroup({
    version: new FormControl('', [
      Validators.required
    ]),
  });
  validationService = inject(FormValidationService)
  
  ngOnInit() {
    this.versionForm.controls.version.setAsyncValidators(
      this.validationService.versionValidator(
        this.versionForm.controls.version
      )
    )
  }

  formSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    this.versionName = form.controls['version'].value;
  }
}
