import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
// RXJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// Services
import { ChatService } from '../services/chat.service';

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {

  constructor(
    private _chat_service: ChatService,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const profile_id = route.paramMap.get('profile_id');
    const room_id = route.paramMap.get('room_id');

    return this._chat_service.check_if_profile_can_loggin(profile_id!, room_id!)
      .pipe(
        tap(resp => {
          if (!resp) {
            this._router.navigateByUrl('/chat/menu')
          }
        })
      );
  }

}
