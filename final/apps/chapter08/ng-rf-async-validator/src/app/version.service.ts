import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { timer, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  http = inject(HttpClient);
  apiBaseUrl = 'http://localhost:3333/api/version';

  versionValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => this.validateVersion(control.value)),
        map(({ error }) => {
          const errors: ValidationErrors = {};
          if (error === null) {
            return null;
          }
          errors[error] = true;
          return errors;
        })
      );
    };
  }

  validateVersion(version: string): Observable<{ error: string }> {
    return this.http.get<{ error: string }>(
      `${this.apiBaseUrl}/validate?val=${version}`
    );
  }

  submitVersion(version: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiBaseUrl}`, {
      version,
    });
  }
}
