import { Component, HostListener } from '@angular/core';
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
  cardState: 'active' | 'hovered' = 'active';
  @HostListener('mouseenter') 
  onMouseEnter() { 
    this.cardState = 'hovered'; 
  } 

  @HostListener('mouseleave') 
  onMouseLeave() { 
    this.cardState = 'active'; 
  }
}
