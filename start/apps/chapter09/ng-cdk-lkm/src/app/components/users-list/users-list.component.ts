import { Component, Input } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UsersListItemComponent } from '../users-list-item/users-list-item.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule, UsersListItemComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() listItems: AppUserCard[] = [];
}
