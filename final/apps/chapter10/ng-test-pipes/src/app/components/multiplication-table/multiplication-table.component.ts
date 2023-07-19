import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultTablePipe } from '../../pipes/mult-table.pipe';

@Component({
  selector: 'app-multiplication-table',
  standalone: true,
  imports: [CommonModule, MultTablePipe],
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.scss'],
})
export class MultiplicationTableComponent {
  @Input() digit = 0;
  @Input() limit = 0;
}
