import { Component, Input, OnInit } from '@angular/core';

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

  folders: Section[] = [
    {
      name: 'User 1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'User 2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'User 3',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
