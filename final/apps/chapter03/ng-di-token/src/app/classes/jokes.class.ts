import { InjectionToken } from '@angular/core';

export const JOKES = new InjectionToken('Jokes', {
  providedIn: 'root',
  factory: () => new Jokes(),
});

class Jokes {
  url = 'https://api.chucknorris.io/jokes/random';

  async getRandomJoke() {
    const response = await fetch(this.url).then((res) => res.json());
    return response;
  }
}

export default Jokes;
