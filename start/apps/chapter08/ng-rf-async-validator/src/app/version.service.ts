import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  http = inject(HttpClient);
  apiBaseUrl = 'http://localhost:3333/api/version';

  submitVersion(version: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBaseUrl}`, {
        version
      }
    );
  }
}
