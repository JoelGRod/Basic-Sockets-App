import { Component, ElementRef, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
// Services
import { AuthService } from '../../../auth/services/auth.service';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';

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

  public get user_profiles(): Profile[] {
    return this._auth_service.user.profiles;
  }

  public get all_rooms(): Room[] {
    return this._chat_service.all_rooms;
  }

  constructor( private _auth_service: AuthService,
                private _chat_service: ChatService ) { }

  ngOnInit(): void {
    this._chat_service.get_all_rooms();
  }

  public change_view(group: MatButtonToggleGroup): void {
    this.view = group.value;
  } 

}
