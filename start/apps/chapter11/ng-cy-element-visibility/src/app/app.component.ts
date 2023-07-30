import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

enum CounterVisibility {
  Visible,
  Hidden
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, CounterComponent],
})
export class AppComponent {
  visibilityOptions = CounterVisibility;
  visibility: CounterVisibility = this.visibilityOptions.Visible;

  toggleCounterVisibility() {
    this.visibility =
      this.visibility === this.visibilityOptions.Hidden
        ? this.visibilityOptions.Visible
        : this.visibilityOptions.Hidden;
  }
}
