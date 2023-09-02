import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, forkJoin, map, mergeMap, Observable } from 'rxjs';
import { IFilm, IPerson } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  http = inject(HttpClient);
  apiBaseUrl = 'https://swapi.dev/api';

  fetchData(personId: string): Observable<{ person: IPerson }> {
    let personInfo: IPerson;
    return this.fetchPerson(personId).pipe(
      mergeMap((person) => {
        personInfo = person;
        return this.fetchPersonFilms(person.films);
      }),
      map((films: IFilm[]) => {
        personInfo.filmObjects = films;
        return {
          person: personInfo,
        };
      })
    );
  }

  fetchPerson(id: string) {
    return this.http
      .get<IPerson>(`${this.apiBaseUrl}/people/${id}/`)
      .pipe(delay(Math.floor(Math.random() * 2 + 1) * 200));
  }

  fetchPersonFilms(films: string[]) {
    return forkJoin([
      ...films.map((filmUrl) =>
        this.http
          .get<IFilm>(filmUrl)
          .pipe(delay(Math.ceil(Math.random() * 4) * 200))
      ),
    ]);
  }
}
