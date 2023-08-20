import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() item!: AppUserCard;
  @Output() itemDeleted = new EventEmitter<AppUserCard>();
  @Output() itemClicked = new EventEmitter<AppUserCard>();

  ngOnInit(): void {
    console.log('User card created');
  }

}
