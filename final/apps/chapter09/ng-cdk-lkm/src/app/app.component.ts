import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AppUserCard } from './interfaces/app-user-card.interface';
import { DataService } from './core/data.service';
import { LoaderComponent } from './components/loader/loader.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent, UsersListComponent],
})
export class AppComponent {
  $listItemsData!: Observable<AppUserCard[]>;
  constructor(private dataService: DataService) {
    this.getData();
  }

  getData() {
    this.$listItemsData = this.dataService.getUsers();
  }
}
