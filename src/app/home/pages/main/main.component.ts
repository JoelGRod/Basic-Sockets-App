import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public menu_items: MenuItem[] = [
    {
      route: './chat/menu',
      icon: 'label',
      name: 'Home'
    },
    {
      route: './chat/menu',
      icon: 'label',
      name: 'Demos'
    },
    {
      route: './chat/menu',
      icon: 'label',
      name: 'Angular'
    },
    {
      route: './chat/menu',
      icon: 'label',
      name: 'About Me'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
