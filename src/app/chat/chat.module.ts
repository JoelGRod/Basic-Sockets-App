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
import { ChatTestComponent } from './components/chat-test/chat-test.component'; // Delete
import { SimpleChatComponent } from './components/simple-chat/simple-chat.component'; // Delete


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
    // Delete
    ChatTestComponent,
    SimpleChatComponent
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
