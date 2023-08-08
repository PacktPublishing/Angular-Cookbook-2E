import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { UserCardComponent } from '../component/user-card/user-card.component';
import { LoaderComponent } from '../component/loader/loader.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserCardComponent, LoaderComponent, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: IUser;
  similarUsers!: IUser[];
  isComponentAlive!: boolean;
  userService = inject(UserService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.isComponentAlive = true;
    this.route.paramMap
      .pipe(
        takeWhile(() => !!this.isComponentAlive),
        mergeMap((params) => {
          const userId = params.get('uuid');
          return this.userService.getUser(userId || '').pipe(
            mergeMap((user) => {
              this.user = user as IUser;
              return this.userService.getSimilarUsers(userId || '');
            })
          );
        })
      )
      .subscribe((similarUsers: IUser[]) => {
        this.similarUsers = similarUsers;
      });
  }

  ngOnDestroy() {
    this.isComponentAlive = false;
  }
}
