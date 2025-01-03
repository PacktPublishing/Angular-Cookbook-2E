import { Directive, HostBinding } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
    selector: '[appButtonFilled]',
    hostDirectives: [
        {
            directive: ButtonDirective,
            inputs: ['color'],
        },
    ],
    standalone: false
})
export class ButtonFilledDirective {
  @HostBinding('attr.fill')
  fill = 'filled';
}
