import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(email: string, password: string) {
    const body: any = { email, password };
    this._http.post('http://localhost:4000/api/auth/login', body).subscribe(resp => {
      console.log(resp);
    });
  }

  register() {

  }

  renew() {
    
  }
}
