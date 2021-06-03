import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// RXJS
import { switchMap, tap } from 'rxjs/operators';
// Interfaces
import { Profile } from 'src/app/auth/interfaces/interfaces';
// Services
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['../../chat-styles.scss', './chat-users.component.scss']
})
export class ChatUsersComponent implements OnInit {

  public profile_id: string = "";
  public room_id: string = "";
  public room_users: Profile[] = [];

  constructor( 
    private _ar: ActivatedRoute,
    private _chat_service: ChatService
  ) { }

  ngOnInit(): void {
    this._ar.params
    .pipe(
      tap( resp => {
        this.room_id = resp.room_id;
        this.profile_id = resp.profile_id;
      }),
      switchMap( resp => this._chat_service.get_room_profiles( resp.room_id ) )
    )
    .subscribe( resp => {
      this.room_users = resp.profiles!;
    } )
  }

}
