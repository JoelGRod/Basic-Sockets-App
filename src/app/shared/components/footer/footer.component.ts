import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  get socket_status(): boolean {
    return this.ws_service.socket_status;
  }

  constructor(
    private ws_service: WebsocketService
  ) { }

}
