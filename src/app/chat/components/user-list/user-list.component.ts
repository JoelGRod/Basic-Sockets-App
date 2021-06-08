import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from 'src/app/auth/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
  .header-img {
    vertical-align: middle;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`]
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

  public changeSource( event: any ): void {
    event.target.src = environment.empty_profile_photo;
  }

}
