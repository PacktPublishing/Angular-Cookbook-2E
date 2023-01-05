import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users = USERS;
}
