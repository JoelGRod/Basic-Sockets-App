import { Component, OnInit } from '@angular/core';
// Interfaces
import { MenuItem } from 'src/app/shared/interfaces/shared-interfaces';
// Services
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`

  `]
})
export class MainComponent implements OnInit {

  public menu_items: MenuItem[] = [
    {
      route: '/home',
      icon: 'home',
      name: 'Home'
    },
    {
      route: '/chat/menu',
      icon: 'question_answer',
      name: 'Chat'
    },
    {
      route: '/auth/login',
      icon: 'input',
      name: 'Login'
    },
    {
      route: '/auth/register',
      icon: 'app_registration',
      name: 'Register'
    },
  ];

  public get user_name(): string {
    return this._auth_service.user.name;
  }

  constructor( private _auth_service: AuthService,
               private _router: Router 
              ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this._router.navigateByUrl('/auth/login');
    this._auth_service.logout();
  }

}
