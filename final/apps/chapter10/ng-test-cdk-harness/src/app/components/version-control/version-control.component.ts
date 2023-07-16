import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
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
