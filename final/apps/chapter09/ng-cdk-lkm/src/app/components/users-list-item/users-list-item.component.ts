
import { Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { FocusableOption } from '@angular/cdk/a11y'; 

@Component({
  selector: 'app-users-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersListItemComponent implements FocusableOption {
  @Input() item!: Partial<AppUserCard>; 
  @HostBinding('tabIndex') 
  tabIndex = -1; 
  @HostBinding('role') 
  role = 'list-item'; 
  el = inject(ElementRef);
  @HostListener('keyup', ['$event']) 
  onEnter(ev: KeyboardEvent) { 
    if (ev.code === 'Enter') { 
      alert('Selected item is: ' + JSON.stringify(this.item)); 
    }
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
