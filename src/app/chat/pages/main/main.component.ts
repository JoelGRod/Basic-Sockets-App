import { Component, OnInit } from '@angular/core';
// Services
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`

  `]
})
export class MainComponent implements OnInit {

  // You get this info from auth service (auth module)
  public user_name: string = this._auth_service.user.name;

  constructor( private _auth_service: AuthService ) { }

  ngOnInit(): void {
   
  }

}
