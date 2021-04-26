import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Environment
import { environment } from 'src/environments/environment';
// Interfaces
import { AuthResponse, User } from '../interfaces/interfaces';
// RXJS
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _base_url: string = environment.base_url;
  private _user!: User;

  public get user(): User {
    return { ...this._user };
  }

  constructor(
    private _http: HttpClient
  ) { }

  public login(email: string, password: string): Observable<boolean | string> {

    const url: string = `${this._base_url}/auth/login`;
    const body = { email, password };

    return this._http.post<AuthResponse>(url, body)
    .pipe(
      map( resp => {
        localStorage.setItem('token', resp.token!);
        localStorage.setItem('name', resp.name!);
        return resp.ok;
      }),
      catchError(err => {
        return of(err.error.msg);
      })
    );
  }

  public register( name: string, email: string, password: string ): Observable<boolean | string> {

    const url: string = `${this._base_url}/auth/new`;
    const body = { name, email, password };

    return this._http.post<AuthResponse>( url, body )
    .pipe(
      map( resp => {
        return resp.ok;
      }),
      catchError( err => {
        return of(err.error.msg);
      })
    )
  }

  // GUARD: jwt-validator
  public renew(): Observable<boolean> {

    const url: string = `${this._base_url}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
    
    return this._http.get<AuthResponse>( url, { headers: headers })
    .pipe(
      map( resp => {
        localStorage.setItem('token', resp.token!);
        localStorage.setItem('name', resp.name!);
        this._user = {
          uid: resp.uid!,
          name: resp.name!,
          email: resp.email!
        };
        return resp.ok;
      }),
      catchError( err => {
        return of(false);
      })
    );    
  }
}
