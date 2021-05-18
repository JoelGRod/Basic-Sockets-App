import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['../../chat-styles.scss', './chat-users.component.scss']
})
export class ChatUsersComponent implements OnInit {

  public room_users: Profile[] = [
    {
      rooms: [],
      _id: 'dkfhdskghkjdshgksdk',
      nickname: 'string',
      desc: 'string',
      photo: 'string',
      created_at: new Date(),
    },
    {
      rooms: [],
      _id: 'dkfhdskghkjdshgksdk',
      nickname: 'string',
      desc: 'string',
      photo: 'string',
      created_at: new Date(),
    },
    {
      rooms: [],
      _id: 'dkfhdskghkjdshgksdk',
      nickname: 'string',
      desc: 'string',
      photo: 'string',
      created_at: new Date(),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
