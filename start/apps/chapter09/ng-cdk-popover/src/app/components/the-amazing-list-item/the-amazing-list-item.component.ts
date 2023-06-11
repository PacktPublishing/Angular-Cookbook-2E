import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';

@Component({
  selector: 'app-the-amazing-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-amazing-list-item.component.html',
  styleUrls: ['./the-amazing-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TheAmazingListItemComponent {
  @Input() item!: Partial<AppUserCard>;
}
