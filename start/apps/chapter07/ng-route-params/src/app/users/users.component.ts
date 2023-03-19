import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { UsersListComponent } from '../components/users-list/users-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  userService = inject(UserService);
  users = this.userService.getAll();
}
