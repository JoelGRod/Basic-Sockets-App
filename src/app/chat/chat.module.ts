import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
// Custom modules (components library)
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
// Components
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatUsersComponent } from './pages/chat-users/chat-users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatConfigComponent } from './pages/chat-config/chat-config.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
// Dialogs
import { CreateRoomDialogComponent } from './components/create-room-dialog/create-room-dialog.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    ChatComponent,
    ChatUsersComponent,
    ProfileComponent,
    ChatConfigComponent,
    ChatListComponent,
    UserListComponent,
    // Dialog
    CreateRoomDialogComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class ChatModule { }
