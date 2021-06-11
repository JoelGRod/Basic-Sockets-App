import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public menu_items: MenuItem[] = [
    {
      route: '/home',
      icon: 'label',
      name: 'Home'
    },
    {
      route: '/home/demos',
      icon: 'label',
      name: 'Demos'
    },
    {
      route: '/home/angular',
      icon: 'label',
      name: 'Angular'
    },
    {
      route: '/home/about',
      icon: 'label',
      name: 'About Me'
    }
  ];

  constructor() { }

}
