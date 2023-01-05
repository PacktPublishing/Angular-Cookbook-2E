import { Component, inject } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  notificationsCount$ = inject(NotificationsService).count$;

  addNotification() {
    const currentValue = this.notificationsCount$.getValue();
    this.notificationsCount$.next(currentValue + 1);
  }

  removeNotification() {
    const currentValue = this.notificationsCount$.getValue();
    if (currentValue === 0) {
      return;
    }
    this.notificationsCount$.next(currentValue - 1);
  }

  resetCount() {
    this.notificationsCount$.next(0);
  }
}
