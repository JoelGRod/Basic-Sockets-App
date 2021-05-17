import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-config',
  templateUrl: './chat-config.component.html',
  styleUrls: ['../../chat-styles.scss', './chat-config.component.scss']
})
export class ChatConfigComponent implements OnInit {

  public form: FormGroup = this._fb.group({
    nickname: [],
    desc: [],
    photo: [],
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
