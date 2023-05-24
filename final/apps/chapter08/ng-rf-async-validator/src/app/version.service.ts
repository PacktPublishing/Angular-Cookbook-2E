import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { timer, switchMap, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

type ValidationError = null | 'pattern' | 'olderVersion';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  http = inject(HttpClient);
  apiBaseUrl = 'http://localhost:3333/api/version';

  versionValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return timer(500).pipe(
        switchMap(() => this.validateVersion(control.value)),
        map(({ error }) => {
          const errors: ValidationErrors = {};
          if (error !== null) {
            errors[error] = true;
          }
          return errors;
        })
      );
    };
  }

  validateVersion(version: string): Observable<{ error: ValidationError }> {
    return this.http.get<{ error: ValidationError }>(
      `${this.apiBaseUrl}/validate?val=${version}`
    );
  }

  submitVersion(version: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      `${this.apiBaseUrl}`, {
        version
      }
    );
  }
}
