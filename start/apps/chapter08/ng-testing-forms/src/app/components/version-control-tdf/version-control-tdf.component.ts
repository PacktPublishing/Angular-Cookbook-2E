import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control-tdf',
  standalone: true,
  imports: [CommonModule, FormsModule, VcLogsComponent],
  templateUrl: './version-control-tdf.component.html',
  styleUrls: ['./version-control-tdf.component.scss'],
})
export class VersionControlTdfComponent {
  @ViewChild('versionForm') versionForm!: NgForm;
  versionInput = '';
  versionName = '0.0.0';

  formSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.versionName = form.controls['version'].value;
  }
}
