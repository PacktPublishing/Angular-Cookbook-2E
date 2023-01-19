import { Directive, HostBinding } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[appButtonFilled]',
  hostDirectives: [
    {
      directive: ButtonDirective,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color'],
    },
  ],
})
export class ButtonFilledDirective {
  @HostBinding('attr.fill')
  fill = 'filled';
}
