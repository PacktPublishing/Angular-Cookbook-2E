import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { User } from '../user.interface';
import { BehaviorSubject, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userService = inject(UserService);
  searchUserInputChange$ = new BehaviorSubject<string>('');
  searchInput = signal<string>('');
  users = signal<User[]>([]);
  searchInputEffect = effect(() => {
    this.searchUserInputChange$.next(this.searchInput());
  })
  ngOnInit(): void {
    this.searchUserInputChange$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      mergeMap((inputVal) => {
        return this.userService.findByTerm(inputVal);
      })
    ).subscribe((users) => {
      this.users.set(users);
    })
  }

  onSearchValChange($event: Event) {
    const searchInputEl = $event.target as HTMLInputElement;
    this.searchInput.set(searchInputEl.value);
  }
}
