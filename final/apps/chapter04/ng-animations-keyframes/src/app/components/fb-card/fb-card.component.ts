import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardAnimation } from '../../animations';

@Component({
  selector: 'app-fb-card',
  standalone: true,
  imports: [CommonModule],
  animations: [cardAnimation],
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss'],
})
export class FbCardComponent {
  cardState = 'active';
}
