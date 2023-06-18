import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
})
export class AppComponent {
  selectedColor = '';
  setSelectedColor(color: string) {
    this.selectedColor = color;
  }
  colorsMap: Record<string, string> = {
  }
  constructor() {
    const colors = ['space-gray', 'silver', 'pink', 'green', 'blue'];
    const htmlEl = document.querySelector('html') as HTMLHtmlElement;
    colors.forEach(color => {
      const val = getComputedStyle(htmlEl).getPropertyValue(`--${color}`);
      this.colorsMap[color] = val;
    })
  }
}
