import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  key = 'vc_logs_ng_od';
  log(val: string) {
    this.saveLogs(val);
  }
  retrieveLogs() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  saveLogs(val: string) {
    const logs = this.retrieveLogs();
    logs.push(val);
    localStorage.setItem(this.key, JSON.stringify(logs));
  }
}
