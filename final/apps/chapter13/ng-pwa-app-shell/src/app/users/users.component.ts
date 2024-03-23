import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { mergeMap, startWith, takeWhile, tap } from 'rxjs/operators';
import { UserCardComponent } from '../component/user-card/user-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserCardComponent, NgxSkeletonLoaderModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  searchForm!: FormGroup;
  componentAlive!: boolean;
  userService = inject(UserService);
  platformId = inject(PLATFORM_ID);
  isSearching = true;
  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchForm.controls['username'].valueChanges
      .pipe(
        startWith(''),
        tap(() => {
          this.isSearching = true;
        }),
        takeWhile(() => !!this.componentAlive && isPlatformBrowser(this.platformId)),
        mergeMap((query) => this.userService.searchUsers(query))
      )
      .subscribe((users) => {
        this.users = users;
        this.isSearching = false;
      });
  }
}
