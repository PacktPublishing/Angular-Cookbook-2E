import { Directive, HostBinding } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[appButtonOutlined]',
  hostDirectives: [
    {
      directive: ButtonDirective,
      inputs: ['color'],
    },
  ],
})
export class ButtonOutlinedDirective {
  @HostBinding('attr.fill')
  fill = 'outlined';
}
