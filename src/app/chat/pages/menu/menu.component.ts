import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
// Services
import { AuthService } from '../../../auth/services/auth.service';
import { ChatService } from '../../services/chat.service';
import { MatDialog } from '@angular/material/dialog';
// Interfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';
import { RoomPayload, ProfilePayload, ChatResponse } from '../../interfaces/chat-interface';
// RXJS
import { Subscription } from 'rxjs';
// Dialogs
import { CreateRoomDialogComponent } from '../../components/create-room-dialog/create-room-dialog.component';
import { CreateProfileDialogComponent } from '../../components/create-profile-dialog/create-profile-dialog.component';
import { GralDialogComponent } from 'src/app/shared/components/gral-dialog/gral-dialog.component';
import { DialogData } from '../../../shared/interfaces/shared-interfaces';


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

  constructor( private _auth_service: AuthService,
               private _chat_service: ChatService, 
               private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.user_rooms = this._auth_service.user.rooms;
    this.user_profiles = this._auth_service.user.profiles;

    this._all_rooms_subs = this._chat_service.get_all_rooms()
      .subscribe( (resp: ChatResponse) => {
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

  // Room
  private create_room(payload: RoomPayload) {
    this._chat_service.create_room(payload)
      .then( room => {
        this.user_rooms.push(room as Room);
      })
      .catch( resp => {
        // Dialog
        this.openGeneralDialog({title: 'Error', icon: 'warning_amber', msg: resp.msg });
      });
  }

  public openRoomDialog(): void {
    const dialogRef = this._dialog.open(CreateRoomDialogComponent, {
      width: '300px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.create_room(result);
      };
    });
  }

  public delete_room(id: string): void {
    this._chat_service.delete_room(id).subscribe( (resp: ChatResponse) => {
      if(resp.ok) {
        this.user_rooms = this.delete_room_from_array(this.user_rooms, resp.room!);
        this.all_rooms = this.delete_room_from_array(this.all_rooms, resp.room!);
      } else {
        this.openGeneralDialog({title: 'Error', icon: 'warning_amber', msg: resp.msg });
      }
    });
  }

  // Profile
  private create_profile(profile: ProfilePayload) {
    this._chat_service.create_user_profile(profile).subscribe( (resp: ChatResponse) => {
      if( resp.ok ) {
        this.user_profiles.push(resp.profile!);
      } else {
        this.openGeneralDialog({title: 'Error', icon: 'warning_amber', msg: resp.msg });
      };
    });
  }

  public openProfileDialog(): void {
    const dialogRef = this._dialog.open(CreateProfileDialogComponent, {
      width: '300px',
      height: '325px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.create_profile(result);
      };
    });
  }


  // Gral Dialog
  public openGeneralDialog(data: DialogData): void {
    const dialogRef = this._dialog.open(GralDialogComponent, {
      width: '250px',
      data
    });
  }

  private delete_room_from_array(array_to_filter: Room[], room_to_delete: Room): Room[] {
    array_to_filter = array_to_filter.filter( (room: Room) => {
      return room._id !== room_to_delete._id;
    });
    return array_to_filter;
  }

}
