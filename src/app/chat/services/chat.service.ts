import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WebsocketService } from 'src/app/shared/services/websocket.service';
// Environments
import { environment } from 'src/environments/environment';
// Interfaces
import { Room } from 'src/app/auth/interfaces/interfaces';
import {
  ChatResponse,
  ChatSocketResponse,
  RoomPayload,
  ProfilePayload,
  LoginPayload,
  MsgPayload
} from '../interfaces/chat-interface';
// RXJS
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _base_url: string = environment.base_url;

  constructor(
    private ws_service: WebsocketService, // This means socket-server connection
    private _http: HttpClient,
  ) { }

  /* ---------------------------------- Sockets ---------------------------------- */

  // Create Room
  // Emit
  public create_room(payload: RoomPayload): Promise<ChatResponse | Room> {
    payload = {
      ...payload,
      token: localStorage.getItem('token')!
    };

    // I use a promise because emit does not return an observable
    return new Promise((resolve, reject) => {
      this.ws_service.emit('create-room', payload, (resp: ChatSocketResponse) => {
        if (resp.ok) {
          resolve(resp.room!);
        } else {
          reject(resp);
        }
      });
    });
  }
  // Listen
  public get_new_rooms() {
    return this.ws_service.listen('new-room-created');
  }

  // Delete Room
  // Emit
  public delete_room_sockets(room_id: string): Promise<ChatResponse | Room> {
    const payload = {
      room_id,
      token: localStorage.getItem('token')!
    };

    // I use a promise because emit does not return an observable
    return new Promise((resolve, reject) => {
      this.ws_service.emit('delete-room', payload, (resp: ChatSocketResponse) => {
        if (resp.ok) {
          resolve(resp.room!);
        } else {
          reject(resp);
        }
      });
    });
  }
  // Listen
  public update_deleted_rooms() {
    return this.ws_service.listen('room-deleted');
  }

  // Login
  // Emit
  public login_room(payload: LoginPayload): Promise<ChatResponse | string> {
    payload = {
      ...payload,
      token: localStorage.getItem('token')!
    };

    return new Promise((resolve, reject) => {
      this.ws_service.emit('login-user', payload, (resp: ChatResponse) => {
        if (resp.ok) {
          resolve(resp.room?._id!);
        } else {
          reject(resp);
        }
      });
    });
  }
  // Listen
  public listen_new_logged_users(room_id: string) {
    return this.ws_service.listen(`${room_id}-login-user`);
  }

  // Logout
  // Emit
  public logout_room(payload: LoginPayload) {
    payload = {
      ...payload,
      token: localStorage.getItem('token')!
    };

    this.ws_service.emit('logout-user', payload, (resp: any) => {
      // Do something with response
    });
  }
  // Listen
  public listen_logout_users(room_id: string) {
    return this.ws_service.listen(`${room_id}-logout-user`);
  }

  // Send Message
  // Emit
  public send_message(payload: MsgPayload): Promise<ChatResponse> {
    payload = {
      ...payload,
      token: localStorage.getItem('token')!
    }

    return new Promise((resolve, reject) => {
      this.ws_service.emit('message', payload, (resp: ChatResponse) => {
        if (resp.ok) resolve( resp );
        else reject(resp);
      });
    });
  }
  // Listen
  public get_messages(room_id: string) {
    return this.ws_service.listen(`${room_id}-new-message`);
  }

  /* ---------------------------------- HTTP --------------------------------------- */
  public get_user_profiles(): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/user-chat-users`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this._http.get<ChatResponse>(url, { headers: headers });
  }

  public get_user_rooms(): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/rooms-user`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this._http.get<ChatResponse>(url, { headers: headers });
  }

  public get_room_profiles(room_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/room-chat-users`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('room_id', room_id);

    return this._http.get<ChatResponse>(url, { headers: headers, params: params });
  }

  public get_all_rooms(): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/rooms`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this._http.get<ChatResponse>(url, { headers: headers });
  }

  public get_room(room_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/room`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('room_id', room_id);

    return this._http.get<ChatResponse>(url, { headers, params });
  }

  public get_profile(profile_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/chat-user`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('profile_id', profile_id);

    return this._http.get<ChatResponse>(url, { headers, params });
  }

  public get_profile_rooms(profile_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/chat-user-rooms`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('profile_id', profile_id);

    return this._http.get<ChatResponse>(url, { headers, params });
  }

  public create_user_profile(profile: ProfilePayload): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/create-chat-user`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this._http.post<ChatResponse>(url, profile, { headers })
      .pipe(
        catchError(resp => of(resp.error))
      );
  }

  public delete_room(room_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/delete-chat-room`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('room_id', room_id);

    return this._http.delete<ChatResponse>(url, { params, headers })
      .pipe(
        catchError(resp => of(resp.error))
      );
  }

  public delete_profile(chat_user_id: string): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/delete-chat-user`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams().set('chat_user_id', chat_user_id);

    return this._http.delete<ChatResponse>(url, { params, headers })
      .pipe(
        catchError(resp => of(resp.error))
      );
  }

  public check_if_profile_can_loggin(profile_id: string, room_id: string): Observable<boolean> {
    const url: string = `${this._base_url}/chat/check-room-login`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);
    const params = new HttpParams()
      .set('room_id', room_id)
      .set('profile_id', profile_id);

    return this._http.get<boolean>(url, { headers, params })
      .pipe(
        map(resp => true),
        catchError(resp => of(false))
      );
  }

}
