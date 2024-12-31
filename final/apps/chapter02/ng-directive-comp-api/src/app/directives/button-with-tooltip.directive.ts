import { Directive } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { TooltipDirective } from './tooltip.directive';

@Directive({
    selector: '[appButtonWithTooltip]',
    hostDirectives: [
        {
            directive: ButtonDirective,
            inputs: ['color', 'fill'],
        },
        {
            directive: TooltipDirective,
            inputs: ['appTooltip: tooltip'],
        },
    ],
    standalone: false
})
export class ButtonWithTooltipDirective {}
