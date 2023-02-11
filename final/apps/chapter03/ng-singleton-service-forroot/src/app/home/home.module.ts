import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotificationsManagerComponent } from './components/notifications-manager/notifications-manager.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [HomeComponent, NotificationsManagerComponent],
  imports: [CommonModule, HomeRoutingModule, ServicesModule],
  providers: [],
})
export class HomeModule {}
