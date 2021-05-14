import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  // You get this info from auth service (auth module)
  public user_name: string = this._auth_service.user.name;

  // TODO INPUT for menu items array

  constructor( private _auth_service: AuthService ) {  }

  ngOnInit(): void {
  }

  // TODO logout()

}
