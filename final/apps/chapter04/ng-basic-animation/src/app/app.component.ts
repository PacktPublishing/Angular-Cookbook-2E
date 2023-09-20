import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FbCardComponent } from './components/fb-card/fb-card.component';
import { TwitterCardComponent } from './components/twitter-card/twitter-card.component';
import { SocialCardType } from './types/social-card-type';
import { trigger, transition, style, animate } from '@angular/animations'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FbCardComponent, TwitterCardComponent],
  animations: [ 
    trigger('fadeInOut', [ 
      transition(':enter', [ 
        style({ opacity: 0, scale: 0.85 }), 
        animate('200ms 100ms', style({ opacity: 1, scale: 1 })), 
      ]), 
      transition(':leave', [ 
        style({ opacity: 1, scale: 1 }), 
        animate('100ms', style({ opacity: 0, scale: 0.85 })), 
      ]), 
    ]), 
  ], 
})
export class AppComponent {
  selectedCardType: SocialCardType = 'facebook';

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
