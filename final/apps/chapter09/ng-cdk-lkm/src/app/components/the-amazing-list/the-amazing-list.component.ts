import { AfterViewInit, Component, HostBinding, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TheAmazingListItemComponent } from '../the-amazing-list-item/the-amazing-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  standalone: true,
  imports: [CommonModule, ScrollingModule, TheAmazingListItemComponent]
})
export class TheAmazingListComponent implements AfterViewInit {
  @HostBinding('role')
  role = 'list';
  @Input() listItems: AppUserCard[] = [];
  @ViewChildren(TheAmazingListItemComponent)
  listItemsElements!: QueryList<TheAmazingListItemComponent>;
  private listKeyManager!: FocusKeyManager<TheAmazingListItemComponent>;
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
