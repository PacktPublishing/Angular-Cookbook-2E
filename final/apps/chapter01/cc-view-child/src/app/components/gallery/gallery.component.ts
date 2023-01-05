import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  pictures: string[] = [];

  ngOnInit(): void {
    this.pictures = new Array(5).fill(0).map(this.generateImage);
  }

  generateImage() {
    return `/assets/images/image-${Math.floor(Math.random() * 8 + 1)}.jpeg`;
  }
}
