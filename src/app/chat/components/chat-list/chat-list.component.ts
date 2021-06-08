import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from 'src/app/auth/interfaces/interfaces';
import { ActionObject } from '../../interfaces/chat-interface';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styles: [`
    .header-img {
      vertical-align: middle;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  `]
})
export class ChatListComponent {

  @Input() chat_list_type: string = "";
  @Input() rooms: Room[] = [];
  @Input() is_general: boolean = true;
  @Output() on_emit_object: EventEmitter<ActionObject> = new EventEmitter<ActionObject>();
  private _empty_photo: string = 'https://images.stockfreeimages.com/1956/sfixl/19561107.jpg';

  constructor() { }

  public emit_object(action: string, subject: string, id: string): void {
    this.on_emit_object.emit(
      { id, action, subject }
    );
  }

  public changeSource( event: any ): void {
    event.target.src = this._empty_photo;
  }

}
