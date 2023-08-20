import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = '/assets/users.json';
  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<IUser | undefined> {
    return this.http.get<{ results: IUser[] }>(this.usersApiUrl).pipe(
      map((resp) =>
        resp.results.find((user) => {
          return user.uuid === userId;
        })
      )
    );
  }

  getSimilarUsers(userId: string): Observable<IUser[]> {
    return this.http
      .get<{ results: IUser[] }>(this.usersApiUrl)
      .pipe(
        map((resp) => resp.results.filter((user) => user.uuid !== userId))
      );
  }

  searchUsers(username: string): Observable<IUser[]> {
    return this.getSimilarUsers('').pipe(
      map((users) => {
        if (!username) {
          return users;
        }
        return users.filter((user) => {
          const query = username.toLowerCase();
          return (
            user.email.toLowerCase().includes(query) ||
            user.name.first.toLowerCase().includes(query) ||
            user.name.last.toLowerCase().includes(query)
          );
        });
      })
    );
  }
}
