import { Component, Inject, OnInit } from '@angular/core';
import Jokes, { JOKES } from './classes/jokes.class';
import { IJoke } from './interfaces/joke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  joke!: IJoke;

  constructor(@Inject(JOKES) private jokes: Jokes) {}

  ngOnInit() {
    this.getJokes();
  }

  async getJokes() {
    this.joke = await this.jokes.getRandomJoke();
  }
}
