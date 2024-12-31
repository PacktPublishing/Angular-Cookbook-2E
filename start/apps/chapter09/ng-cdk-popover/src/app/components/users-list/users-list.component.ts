import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UsersListItemComponent } from '../users-list-item/users-list-item.component';

@Component({
    selector: 'app-users-list',
    imports: [CommonModule, ScrollingModule, UsersListItemComponent],
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() listItems: AppUserCard[] = [];
}

