import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// Interfaces
import { Room } from 'src/app/auth/interfaces/interfaces';
import { DialogData } from 'src/app/shared/interfaces/shared-interfaces';
// Services
import { ChatService } from '../../services/chat.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
// RXJS
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-config',
  templateUrl: './chat-config.component.html',
  styleUrls: ['../../chat-styles.scss', './chat-config.component.scss']
})
export class ChatConfigComponent implements OnInit {

  public room: Room = {
    _id: '',
    name: ''
  }
  public is_loaded: boolean = false;

  private _empty_photo: string = 'https://staticfilesprod.musicworldcupdevelopment.com/backend/images/profile-no-img.png?v=1.0.40';

  public form: FormGroup = this._fb.group({
    name: [''],
    desc: [''],
    photo: [''],
  });

  constructor(
    private _fb: FormBuilder,
    private _activated_route: ActivatedRoute,
    private _chat_service: ChatService,
    private _dialog_service: DialogService
  ) { }

  ngOnInit(): void {
    this._activated_route.params
    .pipe(
      switchMap( resp => this._chat_service.get_room(resp.room_id))
    )
    .subscribe( resp => {
      this.room = resp.room!;
      this.update_form_values();
      setTimeout(() => {
        this.is_loaded = true;
      }, 500);
    })
  }

  private update_form_values(): void {
    this.form.patchValue({
      name: this.room.name,
      desc: this.room.desc,
      photo: this.room.photo
    });
  }

  public changeSource( event: any ): void {
    event.target.src = this._empty_photo;
  }

  public update_room_name(): void {
    const new_name = this.form.get('name')?.value;

    this._chat_service.update_room_name(this.room._id, new_name)
    .subscribe(resp => {
      if(resp.ok) {
        this.room.name = resp.room?.name!;
        this.update_form_values();
      } else {
        this._dialog_service.openGeneralDialog(
          { title: 'Error', icon: 'warning_amber', msg: resp.msg }
        );
      }
    });
  }

  public update_room_info(): void {
    const new_desc = this.form.get('desc')?.value;
    const new_photo = this.form.get('photo')?.value;

    this._chat_service.update_room_info(this.room._id, new_desc, new_photo)
    .subscribe(resp => {
      if(resp.ok) {
        this.room.desc = resp.room?.desc!;
        this.room.photo = resp.room?.photo!;
        this.update_form_values();
      } else {
        this._dialog_service.openGeneralDialog(
          { title: 'Error', icon: 'warning_amber', msg: resp.msg }
        );
      }
    });
  }

  public update_room_password(): void {
    const data: DialogData = {
      title: 'Insert Password',
      icon: 'help_outline',
      msg: 'Insert the room pasword',
      has_password: this.room.has_password
    };
    this._dialog_service.openPasswordDialog(data).subscribe( resp => {
      if(resp === undefined) return;
      else {
        this._chat_service.update_room_password(this.room._id, resp.new_password, resp.old_password)
          .subscribe( resp => {
            if(!resp.ok) {
              this._dialog_service.openGeneralDialog(
                {title: 'error', icon: 'warning_amber', msg: resp.msg}
              );
            } else {
              this.room.has_password = true;
              this._dialog_service.openGeneralDialog(
                {title: 'Success', icon: 'done', msg: resp.msg}
              );
            }
          })
      }
    });
    
  }

}
