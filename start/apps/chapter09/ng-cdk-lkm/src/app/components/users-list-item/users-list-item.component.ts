
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';

@Component({
  selector: 'app-users-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListItemComponent {
  @Input() item!: Partial<AppUserCard>;
}
