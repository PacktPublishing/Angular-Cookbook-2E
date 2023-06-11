import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserCard } from '../interfaces/app-user-card.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<AppUserCard[]> {
    return this.http.get<AppUserCard[]>('/assets/data.json');
  }
}
