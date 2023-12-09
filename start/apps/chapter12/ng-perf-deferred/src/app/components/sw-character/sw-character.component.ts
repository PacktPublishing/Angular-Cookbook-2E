import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mergeMap, forkJoin, catchError, of } from 'rxjs';
import { IPerson } from '../../interfaces/swapi.interfaces';
import { SwapiService } from '../../services/swapi.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-sw-character',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './sw-character.component.html',
  styleUrls: ['./sw-character.component.scss'],
})
export class SwCharacterComponent {
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
