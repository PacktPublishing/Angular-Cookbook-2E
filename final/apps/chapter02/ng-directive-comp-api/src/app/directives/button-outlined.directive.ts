import { Directive, HostBinding } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[appButtonOutlined]',
  hostDirectives: [
    {
      directive: ButtonDirective,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color'],
    },
  ],
})
export class ButtonOutlinedDirective {
  @HostBinding('attr.fill')
  fill = 'outlined';
}
