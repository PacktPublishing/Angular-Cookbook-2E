import { Component, Input } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TheAmazingListComponent {
  @Input() listItems: AppUserCard[] = [];
}
