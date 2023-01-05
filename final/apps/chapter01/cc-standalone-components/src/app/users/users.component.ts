import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users = USERS;
}
