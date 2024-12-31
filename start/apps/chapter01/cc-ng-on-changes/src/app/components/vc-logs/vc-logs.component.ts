import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-vc-logs',
    templateUrl: './vc-logs.component.html',
    styleUrls: ['./vc-logs.component.scss'],
    standalone: false
})
export class VcLogsComponent {
  @Input() vName = '';
}
