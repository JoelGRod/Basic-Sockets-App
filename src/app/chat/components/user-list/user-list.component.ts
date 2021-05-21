import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent {

  @Input() user_list_type: string = "";
  @Input() profiles: Profile[] = [];
  @Input() is_general: boolean = true;
  @Output() on_emit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emit_id(id: string): void {
    this.on_emit.emit(id);
  }

}
