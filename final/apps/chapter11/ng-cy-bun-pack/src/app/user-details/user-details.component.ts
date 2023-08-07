import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, forkJoin, map, mergeMap, Observable, of, tap } from 'rxjs';
import { UserService } from '../user.service';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { User } from '../user.interface';

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
  user = signal<User | null>(null);
  similarUsers = signal<User[]>([]);
  similarUsers$!: Observable<User[]>;
  constructor() {
    this.route.paramMap.pipe(
      map((params) => params.get('uuid')),
      filter((uuid) => !!uuid),
      mergeMap((uuid) => {
        return forkJoin([
          this.userService.getSimilar(uuid as string),
          this.userService.getById(uuid as string)
        ]);
      })
    ).subscribe(([similarUsers, user]) => {
      this.similarUsers.set(similarUsers);
      this.user.set(user || null);
    });
  }
}
