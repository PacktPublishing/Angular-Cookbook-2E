import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDialog = true;

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }
}
