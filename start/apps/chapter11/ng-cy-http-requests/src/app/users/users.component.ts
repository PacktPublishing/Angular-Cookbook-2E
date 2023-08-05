import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userService = inject(UserService);
  users = signal<User[]>([]);
  ngOnInit(): void {
    this.userService.getAll()
      .subscribe({
        next: (users) => {
          this.users.set(users);
        }
      })
  }
}
