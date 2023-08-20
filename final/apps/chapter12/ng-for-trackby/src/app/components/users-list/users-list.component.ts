import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() listItems: AppUserCard[] = [];
  @Output() itemClicked = new EventEmitter<AppUserCard>();
  @Output() itemDeleted = new EventEmitter<AppUserCard>();
  trackByFn(_index: number, item: AppUserCard) {
    return item.id;
  }
}
