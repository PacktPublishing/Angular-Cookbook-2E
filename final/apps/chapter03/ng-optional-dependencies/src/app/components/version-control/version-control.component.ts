import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggerService } from '../../services/logger.service';

const versionRegExp = /\d+\.\d+\.\d+/;

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
})
export class VersionControlComponent implements OnInit {
  versionForm = new FormGroup({
    version: new FormControl('', [Validators.pattern(versionRegExp)]),
  });
  versionName!: string;

  constructor(@Optional() private loggerService: LoggerService) {
    const logs = this.loggerService?.retrieveLogs() || [];
    if (logs.length) {
      this.versionName = logs[logs.length - 1].match(versionRegExp)[0];
    } else {
      this.versionName = '0.0.0';
    }
  }

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
