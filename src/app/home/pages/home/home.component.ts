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
      'This page is just for professional purposes.',
      'It has been created using angular as frontend, nodejs as backend and mongodb as database (along with other technologies like Angular Material, Angular Flex Layout, Bootstrap 5, SCSS...).',
      'In the Works section you can see some examples (sometimes modules of this same app, external applications or wordpress pages) of what I have done so far, personally, as an example for potential employers.',
      'My resume is available in the "about me" section, as well as access to my social networks and github.',
      'All the code of this website it is included in the Basic-Sockets-App (frontend) and Backend-Server-TS-Sockets (Backend) projects in my GitHub account (see About Me section) in case you want to review it, remember that this page is under constant construction, there are many things that I still need to add!.',
      'Thank you so much for the visit!',
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
