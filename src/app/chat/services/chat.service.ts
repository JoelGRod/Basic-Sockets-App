import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from 'src/app/shared/services/websocket.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( 
    private ws_service: WebsocketService // This means socket-server connection
  ) { }

  send_message( from: string, msg: string ) {
    const payload = {
      from: from,
      msg: msg
    };

    this.ws_service.emit('message', payload);
  }

  get_messages() {
    return this.ws_service.listen('new-message');
  }
}
