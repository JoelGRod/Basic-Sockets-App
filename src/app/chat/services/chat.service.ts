import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebsocketService } from 'src/app/shared/services/websocket.service';
// Environments
import { environment } from 'src/environments/environment';
// Interfaces
import { Room } from 'src/app/auth/interfaces/interfaces';
import { ChatResponse, ChatSocketResponse } from '../interfaces/chat-interface';
// RXJS
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _base_url: string = environment.base_url;

  constructor(
    private ws_service: WebsocketService, // This means socket-server connection
    private _http: HttpClient,
  ) { }

  // Sockets

  // Create Room
  public create_room(): Promise<ChatSocketResponse | Room> {
    const payload = {
      room_name: 'room sockets 10',
      desc: 'Room sockets',
      photo: 'Room photo',
      password: '',
      has_password: false,
      token: localStorage.getItem('token')
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

  public get_new_rooms() {
    return this.ws_service.listen('new-room-created');
  }


  send_message(nickname: string, msg: string) {
    const payload = {
      room_id: '6096b63c0e43d310013a8586',
      token: localStorage.getItem('token'),
      nickname: 'chatuser1 test',
      msg,
    };

    this.ws_service.emit('message', payload, (resp: any) => {
      console.log(resp);
    });
  }

  get_messages(room_name: string) {
    return this.ws_service.listen(`${room_name}-new-message`);
  }

  // TEST PURPOSES
  login_room() {
    const payload = {
      token: localStorage.getItem('token'),
      room_id: '6096b63c0e43d310013a8586',
      nickname: 'chatuser1 test',
      password: 'no password mod'
    };

    this.ws_service.emit('login-user', payload, (resp: any) => {
      console.log(resp);
    });
  }

  logout_room() {
    const payload = {
      token: localStorage.getItem('token'),
      room_id: '6096b63c0e43d310013a8586',
      nickname: 'chatuser1 test'
    };

    this.ws_service.emit('logout-user', payload, (resp: any) => {
      console.log(resp);
    });
  }

  // HTTP requests
  public get_all_rooms(): Observable<ChatResponse> {
    const url: string = `${this._base_url}/chat/rooms`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token')!);

    return this._http.get<ChatResponse>(url, { headers: headers });
  }


}
