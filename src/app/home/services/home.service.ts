import { Injectable } from '@angular/core';
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _cards: CardInfo[] = [
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
    {
      avatar_img: '../../../../assets/images/logos/wordpress.png',
      title: 'wordpress page',
      subtitle: 'Wordpress',
      image: '../../../../assets/images/home/elsitio.png',
      image_alt_text: 'Logo El Sitio del Sauzal',
      description: [
        'A page made for the socio-cultural space El Sitio del Sauzal.',
        'For its realization, the CMS Wordpress has been used together with the avada template.',
        'Some elements were developed to satisfy the client needs (styles and custom main menu, all solved with CSS).'
      ],
      external_link: 'https://elsitiodelsauzal.com/'
    },
  ];

  public get cards(): CardInfo[] {
    return [...this._cards];
  }

  constructor() { }
}
