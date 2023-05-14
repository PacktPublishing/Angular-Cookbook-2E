import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-version-control',
  standalone: true,
  imports: [CommonModule, VcLogsComponent, ReactiveFormsModule],
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
})
export class VersionControlComponent {
  versionInput = '';
  versionName = '0.0.0';
  versionForm = new FormGroup({
    version: new FormControl('', [
      Validators.required
    ]),
  });

  versionService = inject(VersionService)
  
  formSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }
    const newVersion = form.controls['version'].value;
    this.versionService.submitVersion(newVersion).subscribe({
      next: () => {
        this.versionName = newVersion;
        this.versionForm.reset({
          version: ''
        }, {emitEvent: false});
        this.versionForm.controls.version.setErrors(null);
      },
      error: ({error}) => {
        if (error.message === 'oldVersion' || error.message === 'pattern') {
          this.versionForm.controls.version.setErrors({
            [error.message]: true
          })
        } else {
          alert(error.message)
        }
      }
    })
  }
}
