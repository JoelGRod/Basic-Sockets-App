import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Profile } from 'src/app/auth/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  private _empty_photo: string = 'https://staticfilesprod.musicworldcupdevelopment.com/backend/images/profile-no-img.png?v=1.0.40';

  public form: FormGroup = this._fb.group({
    nickname: [this.profile.nickname],
    desc: [this.profile.desc],
    photo: [this.profile.photo],
  });

  constructor(
    private _fb: FormBuilder,
    private _chat_service: ChatService,
    private _activated_route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activated_route.params
      .pipe(
        switchMap( resp => this._chat_service.get_profile(resp.profile_id))
      )
      .subscribe( resp => {
        this.is_user_profile = resp.ok;
        this.profile = resp.profile!;
        console.log(this.profile);
      })
  }

  public changeSource( event: any ): void {
    event.target.src = this._empty_photo;
  }

  public send_form(): void {

  }

}
