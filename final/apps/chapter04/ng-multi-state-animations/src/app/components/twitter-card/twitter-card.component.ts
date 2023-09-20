import { Component, HostListener } from '@angular/core';
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
