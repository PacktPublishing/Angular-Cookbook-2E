import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  users$!: Observable<User[]>;
  
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
