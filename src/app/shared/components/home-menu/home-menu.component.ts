import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/shared-interfaces';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent {

  @Input() menu_items: MenuItem[] = [];
  @Input() is_animated: boolean = true;
  @Input() title: string = 'My PortFolio';

  constructor() { }

}
