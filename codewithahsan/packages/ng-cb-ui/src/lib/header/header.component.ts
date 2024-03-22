import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLogoComponent } from '../ng-logo/ng-logo.component';
import { PULSE_CHECKER_SESSIONS } from '../../assets/pulsechecker-sessions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ng-cb-ui-header',
  standalone: true,
  imports: [CommonModule, NgLogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() appName = 'ng-cookbook-recipe';
  @Input() appTitle = 'Angular Cookbook Recipe';
  reviewsShown = false;
  sanitizer = inject(DomSanitizer);

  reviewLink!: SafeResourceUrl;

  ngOnInit(): void {
    this.reviewLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://pulsechecker.netlify.app/review-widget?sessionPin=${
        PULSE_CHECKER_SESSIONS[this.appName].pin
      }`
    );
  }

  toggleReviewsShown() {
    this.reviewsShown = !this.reviewsShown;
  }
}
