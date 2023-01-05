import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { User, USERS } from '../data';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  route = inject(ActivatedRoute);
  user$!: Observable<User | undefined>;
  constructor() {
    this.user$ = this.route.paramMap.pipe(
      filter((params) => !!params.get('uuid')),
      map((params) => {
        const uuid = params.get('uuid');
        return USERS.find((user) => user.uuid === uuid);
      })
    );
  }
}
