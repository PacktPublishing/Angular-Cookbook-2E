import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;
  addNewPicture() {
    console.log('added new picture');
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    console.log('removed first picture');
    this.gallery.pictures.shift();
  }
}
