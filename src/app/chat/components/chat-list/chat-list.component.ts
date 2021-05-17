import { Component, Input, OnInit } from '@angular/core';

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

  rooms: Section[] = [
    {
      room: 'Room 1',
      updated: new Date('1/1/16'),
    },
    {
      room: 'Room 2',
      updated: new Date('1/17/16'),
    },
    {
      room: 'Room 3',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
