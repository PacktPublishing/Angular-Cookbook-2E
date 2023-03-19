import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable} from 'rxjs';
import { User } from '../data';
import { UserService } from '../user.service';
import { UsersListComponent } from '../components/users-list/users-list.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule, UsersListComponent],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  user$!: Observable<User | null>;
  similarUsers$!: Observable<User[]>;
}
