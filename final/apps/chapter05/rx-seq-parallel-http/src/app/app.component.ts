import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { IPerson } from './interfaces';
import { SwapiService } from './swapi.service';
import { catchError, forkJoin, mergeMap, of } from 'rxjs';

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
    this.swapi
      .fetchPerson('1')
      .pipe(
        mergeMap((person) => {
          const personObj = {
            ...person,
            filmObjects: [],
          };
          this.person = personObj;
          return forkJoin(
            this.person.films.map((filmUrl) => this.swapi.fetchFilm(filmUrl))
          );
        }),
        catchError((err) => {
          console.error('Error while fetching films', err);
          alert('Could not get films. Please try again.');
          return of([]);
        })
      )
      .subscribe({
        next: (films) => {
          this.person.filmObjects = films;
          this.loadingData = false;
        },
        error: (err) => {
          console.error('Error while fetching person', err);
        },
      });
  }
}
