import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private _socket_status: boolean = false;

  get socket_status(): boolean {
    return this._socket_status;
  }

  constructor(
    private socket: Socket  // Direct connection with socket server
  ) { 
    this.check_status();
  }

  private check_status(): void {
    this.socket.on('connect', () => {
      console.log('Connected to server'),
      this._socket_status = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server'),
      this._socket_status = false;
    });
  }

  /** 
   * Emits ANY event
   * emit('EVENT', payload?, callback?)
  */
  emit( event: string, payload?: any, callback?: Function ) {
    this.socket.emit(event, payload, callback);
  }

  /** 
   * Listen to ANY server event
   * Returns an observable with the event name actions from server
  */
  listen( event: string ) {
    return this.socket.fromEvent( event );
  }
}
