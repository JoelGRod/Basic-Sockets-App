import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatConfigComponent } from './pages/chat-config/chat-config.component';
import { ChatUsersComponent } from './pages/chat-users/chat-users.component';
import { ChatComponent } from './pages/chat/chat.component';
// Components
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'room', component: ChatComponent },
      { path: 'room-users', component: ChatUsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'room-config', component: ChatConfigComponent },
      { path: '**', redirectTo: 'menu' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutingModule { }
