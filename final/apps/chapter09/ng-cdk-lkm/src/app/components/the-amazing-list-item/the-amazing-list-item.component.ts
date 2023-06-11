import { Component, ElementRef, HostBinding, HostListener, Input, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserCard } from '../../interfaces/app-user-card.interface';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-the-amazing-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-amazing-list-item.component.html',
  styleUrls: ['./the-amazing-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TheAmazingListItemComponent implements FocusableOption {
  @Input() item!: Partial<AppUserCard>;
  @HostBinding('tabIndex')
  tabIndex = -1;
  @HostBinding('role')
  role = 'list-item';
  @HostListener('keyup', ['$event'])
  onEnter(ev: KeyboardEvent) {
    if (ev.code === 'Enter') {
      alert('Selected item is: ' + JSON.stringify(this.item));
    }
  }
  el = inject(ElementRef);

  focus() {
    this.el.nativeElement.focus();
  }

}
