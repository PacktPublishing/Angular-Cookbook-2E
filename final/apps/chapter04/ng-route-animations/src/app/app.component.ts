import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ROUTE_ANIMATION } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [ROUTE_ANIMATION]
})
export class AppComponent {
  @ViewChild(RouterOutlet) routerOutlet!: RouterOutlet;
  getRouteAnimationState() { 
    return ( 
      this.routerOutlet && 
      this.routerOutlet.activatedRouteData && 
      this.routerOutlet.activatedRouteData['transitionState'] 
    ); 
  }
}
