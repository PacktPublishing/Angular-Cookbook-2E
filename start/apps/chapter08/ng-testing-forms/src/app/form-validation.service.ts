import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  http = inject(HttpClient);
  apiBaseUrl = 'http://localhost:3333/api/validate/version';

  versionValidator(appNameControl: AbstractControl): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      // if we don't have an app selected, do not validate
      if (!appNameControl.value) {
        return of({ require: true });
      }
      return timer(500).pipe(
        switchMap(() => this.validateVersion(control.value)),
        map(({ result }) => {
          const errors: ValidationErrors = {};
          if (!result) {
            errors['pattern'] = true;
          }
          return errors;
        })
      );
    };
  }

  private validateVersion(version: string): Observable<{ result: boolean }> {
    return this.http.get<{ result: boolean }>(
      `${this.apiBaseUrl}?val=${version}`
    );
  }
}
