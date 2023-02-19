import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-twitter-card',
  standalone: true,
  imports: [CommonModule],
  animations: [cardAnimation],
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.scss'],
})
export class TwitterCardComponent {
  cardState = 'active';
}
