import { Directive } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { TooltipDirective } from './tooltip.directive';

@Directive({
  selector: '[appButtonWithTooltip]',
  hostDirectives: [
    {
      directive: ButtonDirective,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color', 'fill'],
    },
    {
      directive: TooltipDirective,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property, @angular-eslint/no-input-rename
      inputs: ['appTooltip: tooltip'],
    },
  ],
})
export class ButtonWithTooltipDirective {}
