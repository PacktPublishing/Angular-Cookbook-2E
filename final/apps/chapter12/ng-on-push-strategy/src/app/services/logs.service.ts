import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs: Record<string, number> = {}

  updateLogEntry(email: string) {
    if (this.logs[email] === undefined) {
      this.logs = {
        ...this.logs,
        [email]: 1
      }
    } else {
      this.logs = {
        ...this.logs,
        [email]: this.logs[email] + 1
      }
    }
  }
}
