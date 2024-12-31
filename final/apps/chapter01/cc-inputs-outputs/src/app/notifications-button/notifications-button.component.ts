import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notifications-button',
    templateUrl: './notifications-button.component.html',
    styleUrls: ['./notifications-button.component.scss'],
    standalone: false
})
export class NotificationsButtonComponent {
  @Input() count = 0;
}
