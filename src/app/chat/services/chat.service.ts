import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from 'src/app/shared/services/websocket.service';
import { environment } from 'src/environments/environment';


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
}
