import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FbCardComponent } from './components/fb-card/fb-card.component';
import { TwitterCardComponent } from './components/twitter-card/twitter-card.component';
import { SocialCardType } from './types/social-card-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FbCardComponent, TwitterCardComponent],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 })),
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
