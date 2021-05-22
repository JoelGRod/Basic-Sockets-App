import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
// Services
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';
import { RoomPayload, ProfilePayload, ChatResponse, ActionObject, LoginPayload } from '../../interfaces/chat-interface';
import { DialogData } from '../../../shared/interfaces/shared-interfaces';
// RXJS
import { Subscription, Observable } from 'rxjs';
// Dialogs
import { CreateRoomDialogComponent } from '../../components/create-room-dialog/create-room-dialog.component';
import { CreateProfileDialogComponent } from '../../components/create-profile-dialog/create-profile-dialog.component';
import { SelectDialogComponent } from '../../components/select-dialog/select-dialog.component';
import { PasswordDialogComponent } from '../../components/password-dialog/password-dialog.component';
import { GralDialogComponent } from 'src/app/shared/components/gral-dialog/gral-dialog.component';


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
  private _user_rooms_subs!: Subscription;
  private _user_profiles_subs!: Subscription;
  private _all_rooms_subs!: Subscription;
  private _new_rooms_subs!: Subscription;
  private _deleted_rooms_subs!: Subscription;

  constructor(private _chat_service: ChatService,
    private _dialog: MatDialog,
    private _router: Router) { }

  ngOnInit(): void {
    // HTTP Subscriptions
    this._user_rooms_subs = this._chat_service.get_user_rooms()
      .subscribe((resp: ChatResponse) => {
        if (resp.ok) this.user_rooms = resp.rooms!;
      });

    this._user_profiles_subs = this._chat_service.get_user_profiles()
      .subscribe((resp: ChatResponse) => {
        if (resp.ok) this.user_profiles = resp.profiles!;
      });

    this._all_rooms_subs = this._chat_service.get_all_rooms()
      .subscribe((resp: ChatResponse) => {
        if (resp.ok) this.all_rooms = resp.rooms!;
      });

    // Sockets subscriptions
    this._new_rooms_subs = this._chat_service.get_new_rooms()
      .subscribe(resp => {
        this.all_rooms.push(resp as Room);
      });

    this._deleted_rooms_subs = this._chat_service.update_deleted_rooms()
      .subscribe(room => {
        this.all_rooms = this.delete_element_from_array(this.all_rooms, room as Room)
      });
  }

  ngOnDestroy(): void {
    // HTTP Unsubscribe
    this._user_rooms_subs.unsubscribe();
    this._user_profiles_subs.unsubscribe();
    this._all_rooms_subs.unsubscribe();
    // Sockets Unsubscribe
    this._new_rooms_subs.unsubscribe();
    this._deleted_rooms_subs.unsubscribe();
  }

  /* ---------------------------------------- Room ------------------------------------ */
  // ----------------- Create Room
  private create_room(payload: RoomPayload): void {
    this._chat_service.create_room(payload)
      .then(room => {
        this.user_rooms.push(room as Room);
      })
      .catch(resp => {
        // Dialog
        this.openGeneralDialog({ title: 'Error', icon: 'warning_amber', msg: resp.msg });
      });
  }
  // Create Room Dialog
  public openRoomDialog(): void {
    const dialogRef = this._dialog.open(CreateRoomDialogComponent, {
      width: '300px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.create_room(result);
      };
    });
  }

  // ----------------- Delete Room
  private delete_room(id: string): void {
    this._chat_service.delete_room_sockets(id)
      .then(room => {
        this.user_rooms = this.delete_element_from_array(this.user_rooms, room as Room);
      })
      .catch(resp => {
        // Dialog
        this.openGeneralDialog({ title: 'Error', icon: 'warning_amber', msg: resp.msg });
      });
  }
  // Delete Room Dialog
  public delete_room_dialog(id: string): void {
    const data = {
      title: 'Are you sure?',
      icon: 'warning_amber',
      msg: 'You are about to delete a room...',
      response: true
    };

    this.openGeneralDialogResponse(data)
      .subscribe((result: boolean) => {
        if (result) this.delete_room(id);
      });
  }

  // ----------------- Login
  public login_checks(room_id: string): void {

    if(this.is_some_profile_connected(room_id)) return;

    let payload: LoginPayload = {
      room_id,
      nickname: '',
      password: ''
    };

    // Select Profile
    this.select_login_profile().subscribe(nickname => {
      if (nickname === undefined) return;
      payload.nickname = nickname;
      // Room has password?
      const room = this.all_rooms.find(room => room._id === room_id);
      if (room?.has_password) {
        // Enter password
        this.enter_login_password().subscribe(password => {
          if (password === undefined) return;
          payload.password = password;
          this.login_room(payload);
        })
      } else {
        this.login_room(payload);
      }
    });
  }
  // A user profile is already connected?
  private is_some_profile_connected(room_id: string): boolean {
    for (let profile of this.user_profiles) {
      if (profile.rooms!.find(room => room === room_id) !== undefined) {
        this._router.navigate(['/chat/room', room_id, profile._id]);
        return true;
      }
    }
    return false;
  }
  // Select profile
  private select_login_profile(): Observable<string> {
    const dialogProfile = this._dialog.open(SelectDialogComponent, {
      width: '300px',
      height: 'auto',
      data: this.user_profiles
    });

    return dialogProfile.afterClosed();
  }
  // Enter password
  private enter_login_password(): Observable<string> {
    const dialogPassword = this._dialog.open(PasswordDialogComponent, {
      width: '300px',
      height: 'auto'
    });

    return dialogPassword.afterClosed();
  }
  // Login Room
  private login_room(payload: LoginPayload): void {
    this._chat_service.login_room(payload)
      .then(server_room_id => {
        let connected_profile = this.user_profiles.find(profile => profile.nickname === payload.nickname);
        connected_profile?.rooms?.push(server_room_id as string);
        this._router.navigate(['/chat/room', server_room_id, connected_profile?._id]);
      })
      .catch(resp => {
        this.openGeneralDialog({ title: 'Error', icon: 'warning_amber', msg: resp.msg });
      });
  }

  /* ---------------------------------------- Profile -------------------------------------------- */
  // ----------------- Create Profile
  private create_profile(profile: ProfilePayload) {
    this._chat_service.create_user_profile(profile).subscribe((resp: ChatResponse) => {
      if (resp.ok) {
        this.user_profiles.push(resp.profile!);
      } else {
        this.openGeneralDialog({ title: 'Error', icon: 'warning_amber', msg: resp.msg });
      };
    });
  }
  // Create profile dialog
  public openProfileDialog(): void {
    const dialogRef = this._dialog.open(CreateProfileDialogComponent, {
      width: '300px',
      height: '325px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.create_profile(result);
      };
    });
  }

  // ----------------- Delete profile
  private delete_profile(id: string): void {
    this._chat_service.delete_profile(id).subscribe((resp: ChatResponse) => {
      if (resp.ok) {
        this.user_profiles = this.delete_element_from_array(this.user_profiles, resp.profile);
      } else {
        this.openGeneralDialog({ title: 'Error', icon: 'warning_amber', msg: resp.msg });
      }
    });
  }
  // Delete profile Dialog
  public delete_profile_dialog(id: string): void {
    const data = {
      title: 'Are you sure?',
      icon: 'warning_amber',
      msg: 'You are about to delete a profile...',
      response: true
    };

    this.openGeneralDialogResponse(data)
      .subscribe((result: boolean) => {
        if (result) this.delete_profile(id);
      });
  }

  /* ---------------------------------------- Gral -------------------------------------------- */
  public get_actions(ac: ActionObject): void {
    if (ac.subject === 'room' && ac.action === 'login') this.login_checks(ac.id);
    if (ac.subject === 'room' && ac.action === 'delete') this.delete_room_dialog(ac.id);
  }

  public change_view(group: MatButtonToggleGroup): void {
    this.view = group.value;
  }

  public openGeneralDialog(data: DialogData): void {
    const dialogRef = this._dialog.open(GralDialogComponent, {
      width: '250px',
      data
    });
  }

  public openGeneralDialogResponse(data: DialogData): Observable<boolean> {
    const dialogRef = this._dialog.open(GralDialogComponent, {
      width: '250px',
      data
    });

    return dialogRef.afterClosed();
  }

  private delete_element_from_array(array_to_filter: any[], element_to_delete: any): any[] {
    array_to_filter = array_to_filter.filter((element: any) => {
      return element._id !== element_to_delete._id;
    });
    return array_to_filter;
  }

}
