import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, HighlightDirective, FormsModule],
})
export class AppComponent {
  searchText = '';
}
