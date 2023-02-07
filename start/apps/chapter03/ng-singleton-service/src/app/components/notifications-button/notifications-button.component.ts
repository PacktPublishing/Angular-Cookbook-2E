import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
})
export class NotificationsButtonComponent {
  notificationsService = inject(NotificationsService);
  notificationsCount$: Observable<number> = this.notificationsService.count$;
}
