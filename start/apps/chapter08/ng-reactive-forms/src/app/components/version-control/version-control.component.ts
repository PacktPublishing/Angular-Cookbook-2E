import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VcLogsComponent } from '../vc-logs/vc-logs.component';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss'],
  standalone: true,
  imports: [CommonModule, VcLogsComponent]
})
export class VersionControlComponent  {
  versionInput = '';
  versionName = '0.0.0';
}
