import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Services
import { ChatService } from '../../services/chat.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
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
    nickname: '',
    desc: '',
    photo: ''
  };
  public profile_rooms: Room[] = [];
  private _empty_photo: string = 'https://staticfilesprod.musicworldcupdevelopment.com/backend/images/profile-no-img.png?v=1.0.40';

  public form: FormGroup = this._fb.group({
    nickname: [''],
    desc: [''],
    photo: [''],
  });

  constructor(
    private _fb: FormBuilder,
    private _chat_service: ChatService,
    private _activated_route: ActivatedRoute,
    private _router: Router,
    private location: Location,
    private _dialog_service: DialogService
  ) { }

  ngOnInit(): void {
    this._activated_route.params
      .pipe(
        switchMap( resp => this._chat_service.get_profile(resp.profile_id)),
        tap( resp => {
          this.is_user_profile = resp.ok;
          this.profile = resp.profile!;
          this.update_form_values();
        }),
        switchMap( resp => this._chat_service.get_profile_rooms(resp.profile!._id)),
        catchError( err => {
          this._router.navigateByUrl('/chat/menu');
          return of(err.error);
        })
      )
      .subscribe( resp => {
        if(resp.ok) this.profile_rooms = resp.rooms!;
        else this._dialog_service.openGeneralDialog(
          { title: 'Error', icon: 'warning_amber', msg: resp.msg }
        );
      })
  }

  private update_form_values(): void {
    this.form.patchValue({
      nickname: this.profile.nickname,
      desc: this.profile.desc,
      photo: this.profile.photo
    });
  }

  public changeSource( event: any ): void {
    event.target.src = this._empty_photo;
  }

  public backToPreviousPage() {
    this.location.back();
  }

  public update_nickname(): void {
    const new_nickname = this.form.get('nickname')?.value;

    this._chat_service.update_profile_nickname(this.profile._id, new_nickname)
    .subscribe(resp => {
      if(resp.ok) {
        this.profile.nickname = resp.profile?.nickname!;
        this.update_form_values();
      } else {
        this._dialog_service.openGeneralDialog(
          { title: 'Error', icon: 'warning_amber', msg: resp.msg }
        );
      }
    });
  }

  public update_info(): void {
    const new_desc = this.form.get('desc')?.value;
    const new_photo = this.form.get('photo')?.value;

    this._chat_service.update_profile_info(this.profile._id, new_desc, new_photo)
    .subscribe(resp => {
      if(resp.ok) {
        this.profile.desc = resp.profile?.desc!;
        this.profile.photo = resp.profile?.photo!;
        this.update_form_values();
      } else {
        this._dialog_service.openGeneralDialog(
          { title: 'Error', icon: 'warning_amber', msg: resp.msg }
        );
      }
    });
  }
}
