import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile, Room, Msg } from '../../../auth/interfaces/interfaces';
import { ModMsg, ProfileInfo, RoomInfo, MsgPayload } from '../../interfaces/chat-interface';
// RXJS
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// Dialogs
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/interfaces/shared-interfaces';
import { GralDialogComponent } from 'src/app/shared/components/gral-dialog/gral-dialog.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../chat-styles.scss', './chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('chat_window') chat_window!: ElementRef<HTMLElement>;

  private _room!: Room;
  private _profile!: Profile;

  // Subscriptions
  private _listen_message_subs!: Subscription;
  private _listen_new_logged_users_subs!: Subscription;
  private _listen_logout_user_subs!: Subscription;

  // Info Getters
  public get room_info(): RoomInfo {
    if (this._room) return {
      id: this._room._id,
      name: this._room.name,
      desc: this._room.desc!,
      photo: this._room.photo!,
      profiles: this._room.profiles!
    };
    else return {
      id: 'No id',
      name: 'Room Name',
      desc: 'Room Desc',
      photo: 'Room Image',
      profiles: []
    };
  }

  public get profile_info(): ProfileInfo {
    if (this._profile) return {
      id: this._profile._id,
      nickname: this._profile.nickname
    };
    else return {
      id: 'No id',
      nickname: 'No Nickname'
    }
  }

  public get room_msgs(): ModMsg[] {
    if (this._room) {
      return this.prepare_msg_data(this._room.msgs!);
    } else {
      return [];
    }
  }

  public form: FormGroup = this._fb.group({
    msg: ['', [Validators.required]]
  })

  public is_loaded: boolean = false;

  constructor(private _fb: FormBuilder,
    private _activ_route: ActivatedRoute,
    private _chat_service: ChatService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activ_route.params
      .pipe(
        switchMap(resp => this._chat_service.get_room(resp.room_id))
      )
      .subscribe(resp => {
        this._room = resp.room!;
      });

    this._activ_route.params
      .pipe(
        switchMap(resp => this._chat_service.get_profile(resp.profile_id))
      )
      .subscribe(resp => {
        this._profile = resp.profile!;
      });

    // Sockets
    this._listen_message_subs = this._activ_route.params
      .pipe(
        switchMap(resp => this._chat_service.get_messages(resp.room_id))
      )
      .subscribe(resp => {
        this._room.msgs?.push(resp as Msg);
        this.see_last_messages();
      });
    
    this._listen_logout_user_subs = this._activ_route.params.pipe(
      switchMap( resp => this._chat_service.listen_logout_users(resp.room_id))
    )
    .subscribe( (resp: any) => {
      this._room.profiles = this._room.profiles!.filter((profile: Profile) => {
        return profile.nickname !== resp.nickname;
      });
    });

    this._listen_new_logged_users_subs = this._activ_route.params.pipe(
      switchMap( resp => this._chat_service.listen_new_logged_users(resp.room_id))
    )
    .subscribe( resp => {
      this._room.profiles!.push(resp as Profile);
    });
  }

  ngAfterViewInit(): void {
    this.see_last_messages();
  }

  ngOnDestroy(): void {
    this._listen_message_subs.unsubscribe();
    this._listen_logout_user_subs.unsubscribe();
    this._listen_new_logged_users_subs.unsubscribe();
  }

  public send_message(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: MsgPayload = {
      room_id: this.room_info.id,
      nickname: this.profile_info.nickname,
      msg: this.form.get('msg')!.value
    }

    this._chat_service.send_message(payload)
      .then(resp => this.form.reset())
      .catch(resp => {
        this.openGeneralDialog(
          {
            title: resp.msg,
            icon: 'warning_amber',
            msg: 'The room has been deleted by its creator, do not worry, we already left the room for you'
          });
          this._router.navigateByUrl('/chat/menu');
      });

  }

  public logout_user(): void {
    const payload = {
      room_id: this._room._id,
      nickname: this._profile.nickname,
    };

    const data = {
      title: 'Are you sure?',
      icon: 'priority_high',
      msg: 'Proceed with Room logout?',
      response: true
    };

    this.openGeneralDialogResponse(data)
      .subscribe((result: boolean) => {
        if (result) {
          this._chat_service.logout_room(payload);
          this._router.navigateByUrl('/chat/menu');
        }
      });
  }

  // Helpers?
  private prepare_msg_data(room_msgs: Msg[]): ModMsg[] {
    let mod_msgs: ModMsg[] = [];
    for (let msg of room_msgs) {

      let last_item = mod_msgs[mod_msgs.length - 1];
      if (last_item !== undefined && last_item.nickname === msg.chatuser.nickname) {
        last_item.msgs.push(msg.msg);
        continue;
      }

      let mod_msg: ModMsg = {
        nickname: msg.chatuser.nickname,
        msgs: [msg.msg]
      };
      mod_msgs.push(mod_msg);
    }
    return mod_msgs;
  }

  private see_last_messages(): void {
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 500);
  }

  // Helpers (some are in menu too - Repetitive! clean this!!)
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

}
