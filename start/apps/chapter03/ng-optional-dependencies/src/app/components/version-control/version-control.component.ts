import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
})
export class VersionControlComponent implements OnInit {
  versionForm = new FormGroup({
    version: new FormControl('', [
      Validators.pattern('([0-9]+).([0-9]+).([0-9]+)'),
    ]),
  });
  versionName = '0.0.0';

  ngOnInit(): void {
    this.versionForm.controls.version.setValue(this.versionName);
  }

  formSubmit() {
    const newVersionValue = this.versionForm.controls.version.value;
    if (!this.versionForm.valid) {
      alert('Invalid version value. Please use symantic versioning');
      return;
    }
    this.versionName = newVersionValue || '';
  }
}
