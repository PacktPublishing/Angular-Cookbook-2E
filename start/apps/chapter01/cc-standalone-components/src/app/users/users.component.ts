import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from '../data';

@Component({
    selector: 'app-users',
    imports: [CommonModule],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = USERS;
}
