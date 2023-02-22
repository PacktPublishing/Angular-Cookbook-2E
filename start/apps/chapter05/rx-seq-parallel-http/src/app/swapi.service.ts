import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { IFilm, IPerson } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  http = inject(HttpClient);
  apiBaseUrl = 'https://swapi.dev/api';
  fetchPerson(id: string) {
    return this.http
      .get<IPerson>(`${this.apiBaseUrl}/people/${id}/`)
      .pipe(delay(Math.floor(Math.random() * 2 + 1) * 500));
  }

  fetchFilm(filmUrl: string) {
    return this.http
      .get<IFilm>(filmUrl)
      .pipe(delay(Math.ceil(Math.random() * 4) * 500));
  }
}
