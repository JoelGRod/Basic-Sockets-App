import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Services
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile } from 'src/app/auth/interfaces/interfaces';
import { Room, Msg } from '../../../auth/interfaces/interfaces';
// RXJS
import { switchMap, tap } from 'rxjs/operators';

interface ModMsg {
  nickname: string;
  msgs: string[];
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../chat-styles.scss','./chat.component.scss'] 
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('chat_window') chat_window!: ElementRef<HTMLElement>;

  private _room!: Room;
  private _profile!: Profile;

  // Info Getters

  public get room_id(): string {
    return (this._room) ? this._room._id! : 'No id';
  }

  public get room_photo(): string {
    return (this._room) ? this._room.photo! : 'Room Image';
  }

  public get room_name(): string {
    return (this._room) ? this._room.name!! : 'Room Name';
  }

  public get room_desc(): string {
    return (this._room) ? this._room.desc! : 'Room Desc';
  }

  public get room_profiles(): Profile[] {
    return (this._room) ? this._room.profiles! : [];
  }

  public get room_msgs(): ModMsg[] {
    if(this._room) {
      let mod_msgs: ModMsg[] = [];
      for(let msg of this._room.msgs!) {

        let last_item = mod_msgs[mod_msgs.length - 1];
        if(last_item !== undefined && last_item.nickname == msg.chatuser.nickname) {
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
    } else {
      return [];
    }
  }

  public get profile_name(): string {
    return (this._profile) ? this._profile.nickname! : 'No Nickname';
  }

  public messages: any[] = [
    {
      nickname: 'user1',
      msg: 'hola que tal 1',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user1',
      msg: 'hola que tal 2',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user1',
      msg: 'hola que tal 3',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'test',
      msg: 'a la derecha hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
  ];
  public messages_test: any[] = [
    {
      nickname: 'user1',
      msgs: [
        'hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1 hola que tal 1',
        'hola que tal 2',
        'hola que tal 3'
      ],
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'test',
      msgs: [
        'hola que tal 1',
        'hola que tal 2'
      ],
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user1',
      msgs: [
        'hola que tal 1',
        'hola que tal 2'
      ],
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'test',
      msgs: [
        'hola que tal 1',
        'hola que tal 2',
        'hola que tal 3'
      ],
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
  ];
  public username: string = "test";
  public temp_user: string = "";

  public my_form: FormGroup = this._fb.group({
    msg: ['', [ Validators.required ] ]
  });

  constructor( private _fb: FormBuilder,
    private _activ_route: ActivatedRoute,
    private _chat_service: ChatService
  ) { }

  ngOnInit(): void {
    this._activ_route.params
    .pipe(
      switchMap( resp => this._chat_service.get_room(resp.room_id))
    )
    .subscribe( resp => {
      this._room = resp.room!;
      console.log(this._room);
    });

    this._activ_route.params
    .pipe(
      switchMap( resp => this._chat_service.get_profile(resp.profile_id))
    )
    .subscribe( resp => {
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
    this.messages.push({
      nickname: this.username,
      msg
    });

    this.my_form.reset();

    // DELETE THIS
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 5);

  }

  changeTemp(nickname: string): void {
    this.temp_user = nickname;
  }

}
