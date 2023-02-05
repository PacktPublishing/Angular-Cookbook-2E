import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnChanges {
  @Input() vName!: string;
  logs: string[] = [];
  _vName!: string;

  constructor(private logger: LoggerService) {
    this.logs = this.logger.retrieveLogs();
  }

  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes['vName'].currentValue;
    let message;
    if (changes['vName'].isFirstChange()) {
      message = `initial version is ${currValue.trim()}`;
      if (!this.logs.length) {
        this.logger.log(message);
        this.logs.push(message);
      }
    } else {
      message = `version changed to ${currValue.trim()}`;
      this.logger.log(message);
      this.logs.push(message);
    }
  }
}
