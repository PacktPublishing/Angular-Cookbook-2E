import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotificationsManagerComponent } from './components/notifications-manager/notifications-manager.component';
import { NotificationsService } from '../services/notifications.service';

@NgModule({
  declarations: [HomeComponent, NotificationsManagerComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [NotificationsService],
})
export class HomeModule {}
