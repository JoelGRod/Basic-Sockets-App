import { Component } from '@angular/core';
// Interfaces
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
      route: '/game',
      icon: 'label',
      name: 'Games'
    },
  ];

  constructor() { }

}
