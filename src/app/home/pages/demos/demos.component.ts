import { Component, OnInit } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  public cards: CardInfo[] = [
    {
      avatar_img: '../../../../assets/images/logos/angular.png',
      title: 'chat app',
      subtitle: 'MEAN Stack',
      image: '../../../../assets/images/stock/chat_app.jpeg',
      image_alt_text: 'Chat App example image',
      description: [
        'A basic chat app created with Angular and NodeJs.',
        'You only need to register to be able to create your own profiles (chat users) to chat.',
        'As a security measure, each room can only be entered with a single profile.',
        'The backend is solved with NodeJs and Express, MongoDb is used as database.'
      ],
      link: '/chat/menu'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
