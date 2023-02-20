import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fb-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss'],
})
export class FbCardComponent {
  cardState = 'active';
}
