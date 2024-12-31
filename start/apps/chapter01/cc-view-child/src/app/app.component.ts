import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  addNewPicture() {
    console.log('added new picture');
  }

  removeFirstPicture() {
    console.log('removed first picture');
  }
}
