import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/auth/interfaces/interfaces';

export interface Section {
  room: string;
  updated: Date;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styles: [

  ]
})
export class ChatListComponent implements OnInit {

  @Input() chat_list_type: string = "";
  @Input() rooms: Room[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
