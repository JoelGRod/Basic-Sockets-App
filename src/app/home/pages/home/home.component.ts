import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../../../shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home_card_info: CardInfo = {
    title: "Welcome to my PortFolio!",
    image_alt_text: 'Icon Technologies',
    description: [
      'This is my protfolio',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Temporibus soluta ratione quam repellat, aspernatur, nisi asperiores tempore laborum praesentium hic possimus tenetur.',
      'Temporibus soluta ratione quam repellat, aspernatur, nisi asperiores tempore laborum.',
    ],
    // image: '/assets/images/logos/angular.png'
    image_group: [
      '/assets/images/logos/angular.png',
      '/assets/images/logos/typescript.png',
      '/assets/images/logos/javascript.png',
      '/assets/images/logos/nodejs.png',
      '/assets/images/logos/mongodb.png',
      '/assets/images/logos/mysql.png',
      '/assets/images/logos/docker.png',
      '/assets/images/logos/wordpress.png',
      '/assets/images/logos/vscode.png',
      '/assets/images/logos/unity.png',
      '/assets/images/logos/autocad.png',
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
