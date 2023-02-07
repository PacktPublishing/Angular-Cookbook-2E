import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/operators';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  notificationsService = inject(NotificationsService);
  notificationsCount$: Observable<number> = this.notificationsService.count$;

  getCountValue(callback: (countVal: number) => void) {
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countVal) => {
      this.notificationsService.setCount(++countVal);
    });
  }

  removeNotification() {
    this.getCountValue((countVal) => {
      if (countVal === 0) {
        return;
      }
      this.notificationsService.setCount(--countVal);
    });
  }

  resetCount() {
    this.notificationsService.setCount(0);
  }
}
