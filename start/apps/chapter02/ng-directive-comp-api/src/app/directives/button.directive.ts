import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() color!: 'blue' | 'purple' | 'yellow';
  @Input() fill: 'filled' | 'outlined' = 'outlined';
  constructor(private el: ElementRef) {}
}
