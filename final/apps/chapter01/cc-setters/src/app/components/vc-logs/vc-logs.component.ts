import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent {
  @Input()
  get vName() {
    return this._vName;
  }
  set vName(name: string) {
    if (!this._vName) {
      this.logs.push(`initial version is ${name.trim()}`);
    } else {
      this.logs.push(`version changed to ${name.trim()}`);
    }
    this._vName = name;
  }
  logs: string[] = [];
  _vName!: string;
}
