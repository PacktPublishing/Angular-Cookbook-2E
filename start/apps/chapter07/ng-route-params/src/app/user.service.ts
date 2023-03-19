import { Injectable } from '@angular/core';
import { User, USERS } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll() {
    return USERS;
  }

  getById(userId: string) {
    return USERS.find((user) => user.uuid === userId);
  }

  getSimilar(userId: string) {
    const maxL = Math.ceil((Math.random() * USERS.length - 1))
    return USERS.filter((user) => (user.uuid !== userId)).slice(0, maxL);
  }
}
