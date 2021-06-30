import { Injectable } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';
import { Section, Skill } from '../interfaces/home-interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // --------------------- Projects - Demos --------------------- //
  // Examples cards
  private _cards: CardInfo[] = [
    {
      avatar_img: '/assets/images/logos/angular.png',
      title: 'chat app',
      subtitle: 'MEAN Stack',
      image: '/assets/images/stock/chat_app.jpeg',
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
      avatar_img: '/assets/images/logos/wordpress.png',
      title: 'wordpress page',
      subtitle: 'Wordpress',
      image: '/assets/images/home/elsitio.png',
      image_alt_text: 'Logo El Sitio del Sauzal',
      description: [
        'A page made for the socio-cultural space El Sitio del Sauzal.',
        'For its realization, the CMS Wordpress has been used together with the avada template.',
        'Some elements were developed to satisfy the client needs (styles and custom main menu, all solved with CSS).'
      ],
      external_link: 'https://elsitiodelsauzal.com/'
    },
    {
      avatar_img: '/assets/images/logos/unity.png',
      title: 'Classic Games',
      subtitle: 'Unity',
      image: '/assets/images/stock/arcade.jpeg',
      image_alt_text: 'Arcade machine high score board in a rainbow pattern.',
      description: [
        'In this module we can find some classic games that I developed with unity at the beginning of 2019 as a personal hobby.',
        'The goal was to familiarize myself with unity and what the engine is capable of in 2D.'
      ],
      link: '/game'
    },
  ];

  // --------------------- About Me --------------------- //
  // Content - List
  private _experiences: Section[] = [
    {
      name: 'IT Systems Technician',
      description: 'EGATESA - Computer maintenance. Preparation, configuration and assembly of individual equipment. Bizerba programming. Servers and computers backups. Development of lightweight Apps with Access. ERP system used: CSB-System. User Support. RGPD.',
      start_date: new Date('01/05/15'),
      end_date: new Date('12/25/18')
    },
    {
      name: 'Maintenance Administrative',
      description: 'GC 7 Islas - Administrative tasks in the maintenance area.',
      start_date: new Date('07/1/12'),
      end_date: new Date('01/1/13')
    },
    {
      name: 'Architecture Technician',
      description: 'Gesplan - Systematization of urban information in the Canary Islands (04/2011 - 10/2011). Obras Canarias SL - Architecture Technician (2008 - 2010). Obras Canarias SL - Construction Worker (07/2006 - 09/2007)',
      start_date: new Date('07/1/06'),
      end_date: new Date('10/1/11')
    }
  ];

  private _educations: Section[] = [
    {
      name: 'Web App Development',
      description: 'Focan Institute - App. Development With Web Technology - Level 3 Professional Certificate',
      start_date: new Date('04/1/20'),
      end_date: new Date('10/1/20')
    },
    {
      name: 'Google IT Automation with Python',
      description: 'Coursera - This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation -- that can help them advance their careers. The hands-on curriculum is designed to teach learners how to write code in Python, with a special focus on how this applies to automating tasks in the world of IT support and systems administration.',
      start_date: new Date('01/1/20'),
      end_date: new Date('07/1/20')
    },
    {
      name: 'Programmer Analyst',
      description: 'AFS Training Academy - Programmer Analyst - Level 3 Professional Certificate',
      start_date: new Date('12/1/13'),
      end_date: new Date('07/1/14')
    },
    {
      name: 'Building Engineering',
      description: 'Camilo José Cela University - Building Engineering Degree',
      start_date: new Date('09/1/10'),
      end_date: new Date('06/15/11')
    },
    {
      name: 'Architecture Technician',
      description: 'La Laguna University - Architecture Technician Degree',
      start_date: new Date('10/1/04'),
      end_date: new Date('03/01/09')
    }
  ];

  // Content - Chips
  private _main_skills: Skill[] = [
    { name: 'HTML', color: 'accent' },
    { name: 'CSS', color: 'gray' },
    { name: 'JavaScript', color: 'primary' },
    { name: 'TypeScript', color: 'accent' },
    { name: 'NodeJs', color: 'primary' },
    { name: 'Angular 2+', color: 'accent' },
    { name: 'MySQL', color: 'primary' },
    { name: 'MongoDb', color: 'accent' },
    { name: 'VSCode', color: 'primary' },
    { name: 'MacOs', color: 'primary' },
    { name: 'Debian', color: 'gray' },
    { name: 'Autocad', color: 'gray' },
    { name: 'Revit', color: 'gray' },
  ];

  private _secondary_skills: Skill[] = [
    { name: 'VueJs', color: 'accent' },
    { name: 'Python', color: 'primary' },
    { name: 'PHP', color: 'gray' },
    { name: 'Laravel', color: 'gray' },
    { name: 'Virtual Box', color: 'accent' },
    { name: 'Vagrant', color: 'primary' },
    { name: 'Gimp', color: 'accent' },
    { name: 'Docker', color: 'primary' },
    { name: 'Ableton Live', color: 'accent' },
    { name: 'Unity', color: 'primary' },
    { name: 'Eclipse', color: 'gray' },
    { name: 'Netbeans', color: 'gray' }
  ];

  // Getters
  public get cards(): CardInfo[] {
    return [...this._cards];
  }

  public get experiences(): Section[] {
    return [...this._experiences];
  }

  public get educations(): Section[] {
    return [...this._educations];
  }

  public get main_skills(): Skill[] {
    return [...this._main_skills];
  }

  public get secondary_skills(): Skill[] {
    return [...this._secondary_skills];
  }

  constructor() { }
}
