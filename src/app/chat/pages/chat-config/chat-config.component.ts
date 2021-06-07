import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// INterfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';
// Services
import { ChatService } from '../../services/chat.service';
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

  private _empty_photo: string = 'https://staticfilesprod.musicworldcupdevelopment.com/backend/images/profile-no-img.png?v=1.0.40';

  public form: FormGroup = this._fb.group({
    name: [''],
    desc: [''],
    photo: [''],
  });

  constructor(
    private _fb: FormBuilder,
    private _activated_route: ActivatedRoute,
    private _chat_service: ChatService
  ) { }

  ngOnInit(): void {
    this._activated_route.params
    .pipe(
      switchMap( resp => this._chat_service.get_room(resp.room_id))
    )
    .subscribe( resp => {
      this.room = resp.room!;
      this.update_form_values();
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

}
