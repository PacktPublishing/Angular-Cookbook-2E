import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})
export class ButtonDirective {
  @HostBinding('attr.color')
  @Input()
  color: 'blue' | 'purple' | 'yellow' | 'slate' = 'slate';

  @HostBinding('attr.fill')
  @Input()
  fill!: 'filled' | 'outlined';
  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('app-button', true);
  }
}
