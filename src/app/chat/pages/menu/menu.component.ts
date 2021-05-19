import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
// Services
import { AuthService } from '../../../auth/services/auth.service';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';
// RXJS
import { Subscription } from 'rxjs';
import { ChatSocketResponse } from '../../interfaces/chat-interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../chat-styles.scss', './menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  public view: string = 'my-chats';

  public user_rooms: Room[] = [];
  public user_profiles: Profile[] = [];
  public all_rooms: Room[] = [];

  // Subscriptions
  private _all_rooms_subs!: Subscription;
  private _new_rooms_subs!: Subscription;

  constructor(private _auth_service: AuthService,
    private _chat_service: ChatService) { }

  ngOnInit(): void {
    this.user_rooms = this._auth_service.user.rooms;
    this.user_profiles = this._auth_service.user.profiles;

    this._all_rooms_subs = this._chat_service.get_all_rooms()
      .subscribe(resp => {
        if (resp.ok) this.all_rooms = resp.rooms!;
      });

    this._new_rooms_subs = this._chat_service.get_new_rooms()
      .subscribe(resp => {
        this.all_rooms.push(resp as Room);
      });
  }

  ngOnDestroy(): void {
    this._all_rooms_subs.unsubscribe();
    this._new_rooms_subs.unsubscribe();
  }

  public change_view(group: MatButtonToggleGroup): void {
    this.view = group.value;
  }

  public create_room() {
    this._chat_service.create_room()
      .then( room => {
        this.user_rooms.push(room as Room);
      })
      .catch( resp => {
        console.log(resp);
      });
  }

}
