import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { mergeMap, startWith, takeWhile } from 'rxjs/operators';
import { UserCardComponent } from '../component/user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: IUser[];
  searchForm!: FormGroup;
  componentAlive!: boolean;
  userService = inject(UserService);

  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchForm.controls['username'].valueChanges
      .pipe(
        startWith(''),
        takeWhile(() => !!this.componentAlive),
        mergeMap((query) => this.userService.searchUsers(query))
      )
      .subscribe((users) => {
        this.users = users;
      });
  }
}
