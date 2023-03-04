import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { IPerson } from './interfaces';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, LoaderComponent],
})
export class AppComponent implements OnInit {
  swapi = inject(SwapiService);
  loadingData = false;
  appData!: {
    person: IPerson;
  };
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.loadingData = true;
  }
}
