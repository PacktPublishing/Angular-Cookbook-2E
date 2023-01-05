import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss'],
})
export class NotificationsManagerComponent {
  notificationsCount = 0;

  addNotification() {
    this.notificationsCount++;
  }

  removeNotification() {
    if (this.notificationsCount == 0) {
      return;
    }
    this.notificationsCount--;
  }

  resetCount() {
    this.notificationsCount = 0;
  }
}
