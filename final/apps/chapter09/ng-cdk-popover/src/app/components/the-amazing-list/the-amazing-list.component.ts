import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TheAmazingListItemComponent } from '../the-amazing-list-item/the-amazing-list-item.component';
import { CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectedPosition, OverlayModule } from '@angular/cdk/overlay';
import { PopoverPositionalClassDirective } from '../../directives/popover-positional-class.directive';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    TheAmazingListItemComponent,
    OverlayModule,
    PopoverPositionalClassDirective
  ],
})
export class TheAmazingListComponent {
  @Input() listItems: AppUserCard[] = [];
  popoverMenuTrigger!: CdkOverlayOrigin;
  menuPositions: ConnectedPosition[] = [
    {
      offsetY: 4,
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
    },
    {
      offsetY: -4,
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
    },
  ];
  menuShown = false;
  menuPopoverOrigin: Partial<ConnectedPosition> = {
    originY: undefined
  }
  cdRef = inject(ChangeDetectorRef);

  popoverPositionChanged($event: ConnectedOverlayPositionChange, popover: Partial<ConnectedPosition>) {
    if (popover.originY !== $event.connectionPair.originY) {
      popover.originY = $event.connectionPair.originY;
    }
    this.cdRef.detectChanges();
  }


  openMenu($event: Event, itemTrigger: CdkOverlayOrigin) {
    if ($event) {
      $event.stopImmediatePropagation();
    }
    this.popoverMenuTrigger = itemTrigger;
    this.menuShown = true;
  }

  closeMenu() {
    this.menuShown = false;
  }

}
