import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderComponent } from './component/loader/loader.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { retryBackoff } from './retry-backoff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, LoaderComponent],
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  isMakingHttpCall!: boolean;
  error!: string;
  ngOnInit(): void {
    this.isMakingHttpCall = true;
    this.http
      .get('http://localhost:3333/api/bad-request')
      .pipe(
        retryBackoff(3, 200),
        catchError((err) => {
          this.error = err.message;
          this.isMakingHttpCall = false;
          return throwError(() => err);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.isMakingHttpCall = false;
      });
  }
}
