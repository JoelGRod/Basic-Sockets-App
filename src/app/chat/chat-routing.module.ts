import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatUsersComponent } from './pages/chat-users/chat-users.component';
import { ChatConfigComponent } from './pages/chat-config/chat-config.component';
// Guards
import { ChatGuard } from './guards/chat.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'room/:room_id/:profile_id', component: ChatComponent, canActivate: [ ChatGuard ] },
      { path: 'users/:room_id/:profile_id', component: ChatUsersComponent },
      { path: 'profile/:profile_id', component: ProfileComponent },
      { path: 'room-config/:id', component: ChatConfigComponent },
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
