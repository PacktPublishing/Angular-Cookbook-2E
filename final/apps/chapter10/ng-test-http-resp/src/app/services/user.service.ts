import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../user.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('assets/users.json')
      .pipe(
        map(resp => resp.map(user => {
          const { address } = user;
          return {
            ...user,
            fullAddress: [
              address.street,
              address.suite,
              address.city,
              address.zipcode
            ].join(', ')
          }
        }))
      );
  }
}
