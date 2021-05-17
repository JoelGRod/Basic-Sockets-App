import { Component, EventEmitter, Input, Output } from '@angular/core';
// Interfaces
import { MenuItem } from '../../interfaces/shared-interfaces';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  @Input() user_name: string = "";
  @Input() menu_items: MenuItem[] = [
    {
      route: './chat/menu',
      icon: 'label',
      name: 'Chat'
    }
  ];
  @Output() onLogout: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) {  }

  public logout() {
    this.onLogout.emit('logout');
  }

}
