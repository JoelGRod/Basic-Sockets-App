import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/auth/interfaces/interfaces';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    
  ]
})
export class UserListComponent implements OnInit {

  @Input() user_list_type: string = "";
  @Input() profiles: Profile[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
