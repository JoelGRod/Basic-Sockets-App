import { Injectable } from '@angular/core';
import { WebsocketService } from 'src/app/shared/services/websocket.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private ws_service: WebsocketService // This means socket-server connection
  ) { }

  send_message(nickname: string, msg: string) {
    // const payload = {
    //   from: from,
    //   msg: msg
    // };
    const payload = {
      room_id: '6096b63c0e43d310013a8586',
      token: localStorage.getItem('token'),
      nickname: 'chatuser2 test2',
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
      nickname: 'chatuser2 test2',
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
      nickname: 'chatuser2 test2'
    };

    this.ws_service.emit('logout-user', payload, (resp: any) => {
      console.log(resp);
    });
  }

}
