import { Component } from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    standalone: false
})
export class TooltipComponent {
  tooltip = '';
  left = 0;
  top = 0;
}
