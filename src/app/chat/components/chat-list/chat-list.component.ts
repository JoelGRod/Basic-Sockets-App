import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from 'src/app/auth/interfaces/interfaces';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styles: []
})
export class ChatListComponent {

  @Input() chat_list_type: string = "";
  @Input() rooms: Room[] = [];
  @Input() is_general: boolean = true;
  @Output() on_emit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emit_id(id: string): void {
    this.on_emit.emit(id);
  }

}
