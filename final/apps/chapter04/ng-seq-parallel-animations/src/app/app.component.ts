import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FbCardComponent } from './components/fb-card/fb-card.component';
import { TwitterCardComponent } from './components/twitter-card/twitter-card.component';
import { SocialCardType } from './types/social-card-type';
import { cardAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FbCardComponent, TwitterCardComponent],
  animations: [cardAnimation]
})
export class AppComponent {
  selectedCardType: SocialCardType = 'facebook';

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
