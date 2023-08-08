import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { debounceTime, startWith, switchMap, takeWhile } from 'rxjs/operators';
import { UserCardComponent } from '../component/user-card/user-card.component';
import { LoaderComponent } from '../component/loader/loader.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserCardComponent, LoaderComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: IUser[];
  searchForm!: FormGroup;
  componentAlive!: boolean;
  userService = inject(UserService);
  isLoading = false;
  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchForm.controls['username'].valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        takeWhile(() => !!this.componentAlive),
        switchMap((query) => {
          this.isLoading = true;
          return this.userService.searchUsers(query);
        })
      )
      .subscribe((users) => {
        this.users = users;
        this.isLoading = false;
      });
  }
}
