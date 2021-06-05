import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Services
import { ChatService } from '../../services/chat.service';
// Interfaces
import { Profile, Room } from 'src/app/auth/interfaces/interfaces';
// RXJS
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../chat-styles.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  public is_user_profile: boolean = true;
  public profile: Profile = {
    _id: '',
    nickname: 'test',
    desc: 'test',
    photo: 'test'
  };
  public profile_rooms: Room[] = [];
  private _empty_photo: string = 'https://staticfilesprod.musicworldcupdevelopment.com/backend/images/profile-no-img.png?v=1.0.40';

  public form: FormGroup = this._fb.group({
    nickname: [this.profile.nickname],
    desc: [this.profile.desc],
    photo: [this.profile.photo],
  });

  constructor(
    private _fb: FormBuilder,
    private _chat_service: ChatService,
    private _activated_route: ActivatedRoute,
    private _router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this._activated_route.params
      .pipe(
        switchMap( resp => this._chat_service.get_profile(resp.profile_id)),
        tap( resp => {
          this.is_user_profile = resp.ok;
          this.profile = resp.profile!;  
        }),
        switchMap( resp => this._chat_service.get_profile_rooms(resp.profile!._id)),
        catchError( err => {
          this._router.navigateByUrl('/chat/menu');
          return of(err.error);
        })
      )
      .subscribe( resp => {
        if(resp.ok) this.profile_rooms = resp.rooms!;
      })
  }

  public changeSource( event: any ): void {
    event.target.src = this._empty_photo;
  }

  public backToPreviousPage() {
    this.location.back();
  }

  public send_form(): void {

  }

}
