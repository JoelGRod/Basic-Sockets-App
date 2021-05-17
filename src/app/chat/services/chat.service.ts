import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { WebsocketService } from 'src/app/shared/services/websocket.service';
// Environments
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _base_url: string = environment.base_url;

  constructor(
    private ws_service: WebsocketService, // This means socket-server connection
    private _http: HttpClient,
    private _auth_service: AuthService
  ) { }

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

}
