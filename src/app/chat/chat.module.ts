import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
// Components
import { MainComponent } from './pages/main/main.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    MainComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
