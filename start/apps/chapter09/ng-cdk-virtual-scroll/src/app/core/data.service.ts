import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { AppUserCard } from '../interfaces/app-user-card.interface';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createRandomUser() {
    return {
      id: faker.string.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      picture: faker.image.avatar(),
      phone: faker.phone.number(),
    };
  }

  getUsers(): Observable<AppUserCard[]> {
    // const USERS: AppUserCard[] = faker.helpers.multiple(this.createRandomUser, {
    //   count: 10_000,
    // });
    // return of(USERS);
    return this.http.get<AppUserCard[]>('/assets/data.json').pipe(map((res) => {
      let ret = [...res, ...res, ...res];
      ret = [...res, ...res, ...res];
      ret = [...res, ...res, ...res];
      return ret;
    }));
  }
}
