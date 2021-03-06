import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from 'src/app/auth/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { ActionObject } from '../../interfaces/chat-interface';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styles: [`
    .header-img {
      vertical-align: middle;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  `]
})
export class ChatListComponent {

  @Input() chat_list_type: string = "";
  @Input() rooms: Room[] = [];
  @Input() is_general: boolean = true;
  @Output() on_emit_object: EventEmitter<ActionObject> = new EventEmitter<ActionObject>();

  constructor() { }

  public emit_object(action: string, subject: string, id: string): void {
    this.on_emit_object.emit(
      { id, action, subject }
    );
  }

  public changeSource( event: any ): void {
    event.target.src = environment.empty_chat_photo;
  }

}
