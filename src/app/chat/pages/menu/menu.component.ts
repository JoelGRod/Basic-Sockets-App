import { Component, ElementRef, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../chat-styles.scss','./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public view: string = 'my-chats';

  constructor( private _chat_service: ChatService ) { }

  ngOnInit(): void {
  }

  public change_view(group: MatButtonToggleGroup): void {
    this.view = group.value;
  } 

}
