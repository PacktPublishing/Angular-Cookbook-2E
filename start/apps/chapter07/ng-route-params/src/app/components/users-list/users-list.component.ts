import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: User[] = []
}
