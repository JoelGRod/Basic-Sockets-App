import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
// Components
import { MainComponent } from './pages/main/main.component';
import { ChatComponent } from './components/chat/chat.component';
import { SimpleChatComponent } from './components/simple-chat/simple-chat.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    MainComponent,
    ChatComponent,
    SimpleChatComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
