import { Component, ElementRef, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
// Services
import { AuthService } from '../../../auth/services/auth.service';
// Interfaces
import { Room } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../chat-styles.scss','./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public view: string = 'my-chats';

  public get user_rooms(): Room[] {
    return this._auth_service.user.rooms;
  }

  constructor( private _auth_service: AuthService ) { }

  ngOnInit(): void {
  }

  public change_view(group: MatButtonToggleGroup): void {
    this.view = group.value;
  } 

}
