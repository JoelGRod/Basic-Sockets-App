import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile } from 'src/app/auth/interfaces/interfaces';
import { Room, Msg } from '../../../auth/interfaces/interfaces';
import { ModMsg, ProfileInfo, RoomInfo } from '../../interfaces/chat-interface';
// RXJS
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../chat-styles.scss', './chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('chat_window') chat_window!: ElementRef<HTMLElement>;

  private _room!: Room;
  private _profile!: Profile;

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

  public my_form: FormGroup = this._fb.group({
    msg: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder,
    private _activ_route: ActivatedRoute,
    private _chat_service: ChatService
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
  }

  // DELETE THIS
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 1000);

  }

  send_message(): void {
    const msg = this.my_form.get('msg')!.value;
    // this.messages.push({
    //   nickname: this.username,
    //   msg
    // });

    this.my_form.reset();

    // DELETE THIS
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 5);

  }

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

}
