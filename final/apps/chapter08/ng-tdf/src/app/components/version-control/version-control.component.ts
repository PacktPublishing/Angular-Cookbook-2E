import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, VcLogsComponent]
})
export class VersionControlComponent  {
  versionInput = '';
  versionName = '0.0.0';

  formSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.versionName = form.controls['version'].value;
  }
}
