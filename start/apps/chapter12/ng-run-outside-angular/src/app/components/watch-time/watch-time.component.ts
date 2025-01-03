import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

declare let window: any;

@Component({
    selector: 'app-watch-time',
    templateUrl: './watch-time.component.html',
    styleUrls: ['./watch-time.component.scss'],
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchTimeComponent implements OnInit {
  @Input() value!: number;
  @Input() name!: string;
  @Input() digits = 2;

  ngOnInit(): void {
    if (!window['appLogs']) {
      window['appLogs'] = {};
    }
    window['appLogs'][this.name] = 0;
  }

  get timeVal() {
    window['appLogs'][this.name]++;
    let str = this.value.toString();
    if (str.length === this.digits) {
      return str;
    }
    for (let i = 0, len = this.digits - str.length; i < len; ++i) {
      str = `0${str}`;
    }
    return str;
  }
}
