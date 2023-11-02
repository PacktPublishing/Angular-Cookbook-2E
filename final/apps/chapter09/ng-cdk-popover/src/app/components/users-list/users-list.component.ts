import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UsersListItemComponent } from '../users-list-item/users-list-item.component';
import { CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectedPosition, OverlayModule } from '@angular/cdk/overlay'; 
import { PopoverPositionalClassDirective } from '../../directives/popover-positional-class.directive';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule, UsersListItemComponent, OverlayModule, PopoverPositionalClassDirective],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input() listItems: AppUserCard[] = [];
  popoverMenuOrigin!: CdkOverlayOrigin | null;
  menuPositions: ConnectedPosition[] = [
    { offsetY: 4, originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
    { offsetY: -4, originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
  ];
  menuShown = false;
  cdRef = inject(ChangeDetectorRef); 

  popoverMenuPosition: Partial<ConnectedPosition> = { 
    originY: undefined 
  }; 

  popoverPositionChanged($event: ConnectedOverlayPositionChange) {
    if (this.popoverMenuPosition.originY !== $event.connectionPair.originY) {
      this.popoverMenuPosition.originY = $event.connectionPair.originY;
    }
    this.cdRef.detectChanges();
  }

  openMenu($event: Event, itemTrigger: CdkOverlayOrigin) { 
    if ($event) { 
      $event.stopImmediatePropagation(); 
    } 
    this.popoverMenuOrigin = itemTrigger; 
    this.menuShown = true;
  }

  closeMenu() { 
    this.popoverMenuOrigin = null;
    this.menuShown = false; 
  }
}


