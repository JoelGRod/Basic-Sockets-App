import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtValidatorGuard implements CanActivate, CanLoad {

  constructor(
    private _auth_service: AuthService,
    private _router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth_service.renew()
    .pipe(
      tap( resp => {
        if(!resp) this._router.navigateByUrl('/auth/login');
      })
    );
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth_service.renew()
    .pipe(
      tap( resp => {
        if(!resp) this._router.navigateByUrl('/auth/login');
      })
    );
  }

}
