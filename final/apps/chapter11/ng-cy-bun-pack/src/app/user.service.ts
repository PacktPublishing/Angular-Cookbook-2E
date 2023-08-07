import { Injectable, inject } from '@angular/core';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  getAll(): Observable<User[]> {
    return this.http.get<User[]>('/assets/users.json');
  }

  findByTerm(term: string) {
    return this.getAll().pipe(
      map((users) => {
        return users.filter((user) => {
          const searchableProps = [
            user.name.first,
            user.name.last,
            user.email
          ]
          return searchableProps.some((val) => {
            return val.toLowerCase().includes(term.toLowerCase());
          })
        })
      })
    );
  }

  getById(userId: string): Observable<User | undefined> {
    return this.getAll().pipe(
      map((users) => {
        return users.find((user) => user.uuid === userId)
      })
    );
  }

  getSimilar(userId: string): Observable<User[]> {
    return this.getAll().pipe(
      map((users) => {
        const maxL = Math.ceil((Math.random() * users.length - 1) + 1)
        return users.filter((user) => (user.uuid !== userId)).slice(0, maxL);
      })
    );
  }
}
