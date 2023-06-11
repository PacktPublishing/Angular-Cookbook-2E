import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppUserCard } from '../interfaces/app-user-card.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<AppUserCard[]> {
    /**
     * 270000 records of the data
     */
    return this.http.get<AppUserCard[]>('/assets/data.json').pipe(map((res) => {
      let ret = [...res, ...res, ...res];
      ret = [...res, ...res, ...res];
      ret = [...res, ...res, ...res];
      return ret;
    }));
  }
}
