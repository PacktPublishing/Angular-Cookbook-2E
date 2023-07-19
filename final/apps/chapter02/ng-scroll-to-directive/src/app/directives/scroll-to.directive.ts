import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input() target = '';
  @HostListener('click')
  onClick() {
    const targetElement = document.querySelector(this.target);
    if (!targetElement) {
      throw new Error('`target` is required.');
    }
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
