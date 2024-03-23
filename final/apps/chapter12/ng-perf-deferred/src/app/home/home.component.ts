import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../components/users/users.component';
import { FoldersListComponent } from '../components/folders-list/folders-list.component';
import { SwCharacterComponent } from '../components/sw-character/sw-character.component';
import { LoaderComponent } from '../components/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UsersComponent, FoldersListComponent, SwCharacterComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
