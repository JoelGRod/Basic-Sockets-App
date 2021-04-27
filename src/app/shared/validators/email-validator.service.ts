import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  private _base_url: string = environment.base_url;

  constructor(
    private _http: HttpClient
  ) { }
  
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    const url: string = `${this._base_url}/auth/check_email`;
    const params = new HttpParams()
    .set('email', control.value);

    return this._http.get(url, {params})
    .pipe(
      delay(1000),
      map( (resp : any) => {
        return ( !resp.ok ) ? null : { email_exists: true }; 
      })
    );
  }


}
