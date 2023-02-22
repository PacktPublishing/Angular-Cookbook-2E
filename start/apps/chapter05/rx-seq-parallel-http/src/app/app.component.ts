import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { IPerson } from './interfaces';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, LoaderComponent],
})
export class AppComponent implements OnInit {
  swapi = inject(SwapiService);
  loadingData = false;
  person!: IPerson;
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loadingData = true;
    this.swapi.fetchPerson('1').subscribe((person) => {
      this.person = person;
      this.person.filmObjects = [];
      this.loadingData = false;
    });
    setTimeout(() => {
      this.person.films.forEach((filmUrl) => {
        this.swapi.fetchFilm(filmUrl).subscribe((film) => {
          this.person.filmObjects.push(film);
          this.loadingData = false;
        });
      });
    }, 1500);
  }
}
