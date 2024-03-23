import { AfterViewInit, Component, HostBinding, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UsersListItemComponent } from '../users-list-item/users-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule, UsersListItemComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements AfterViewInit {
  @HostBinding('role') 
  role = 'list'; 
  @Input() listItems: AppUserCard[] = [];
  @ViewChildren(UsersListItemComponent) 
  listItemsElements!: QueryList<UsersListItemComponent>;
  private listKeyManager!: FocusKeyManager<UsersListItemComponent>;
  @HostListener('window:keydown', ['$event']) 
  onKeydown(event: KeyboardEvent) { 
    this.listKeyManager.onKeydown(event); 
  } 

  ngAfterViewInit() { 
    this.listKeyManager = new FocusKeyManager( 
      this.listItemsElements 
    ); 
  }
}
