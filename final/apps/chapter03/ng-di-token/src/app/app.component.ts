import { Component, inject, OnInit } from '@angular/core';
import { JOKES } from './classes/jokes.class';
import { IJoke } from './interfaces/joke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  joke!: IJoke;
  jokes = inject(JOKES);

  ngOnInit() {
    this.getJokes();
  }

  async getJokes() {
    this.joke = await this.jokes.getRandomJoke();
  }
}
