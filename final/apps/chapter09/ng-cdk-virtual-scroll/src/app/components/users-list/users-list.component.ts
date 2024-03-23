
import { Component, Input } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'; 
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() listItems: AppUserCard[] = [];

}
