import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../../chat-styles.scss', './profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public form: FormGroup = this._fb.group({
    nickname: [],
    desc: [],
    photo: [],
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
