import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppUserCard } from './interfaces/app-user-card.interface';
import { DataService } from './core/data.service';
import { LoaderComponent } from './components/loader/loader.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const LOADER_TIMEOUT = 500;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent, UsersListComponent],
})
export class AppComponent implements OnInit {
  $listItemsData!: Observable<AppUserCard[]>;
  showLoader = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.$listItemsData = this.dataService.getUsers();
    }, LOADER_TIMEOUT)
  }

  updateUser(userCard: AppUserCard) {
    console.log('Updating user', userCard);
    userCard.name += ` UPDATED`;
    this.dataService.updateUser(userCard);
    this.$listItemsData = this.dataService.getUsers();
  }

  deleteUser(userCard: AppUserCard) {
    console.log('Deleting user', userCard);
    this.dataService.deleteUser(userCard);
    this.$listItemsData = this.dataService.getUsers();
  }
}
