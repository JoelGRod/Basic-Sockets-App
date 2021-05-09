import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RXJS
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
// Services
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-simple-chat',
  templateUrl: './simple-chat.component.html',
  styles: [
  ]
})
export class SimpleChatComponent implements OnInit, OnDestroy {

  @ViewChild('chat_msg') chat_msg!: ElementRef<HTMLElement>;
  @Input() user_name: string = '';

  // TEMP, modify this
  private room_name: string = 'Room 1 test mod';

  private _subscription!: Subscription;
  
  public messages: any[] = [];
  public my_form: FormGroup = this.fb.group({
    msg: [ '', [ Validators.required ] ]
  });

  constructor( 
        private chat_service: ChatService,
        private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
     this._subscription = this.chat_service.get_messages(this.room_name)
     .pipe(
       tap( msg => this.messages.push(msg) ),
       delay( 100 )
     )
     .subscribe( msg => {
       this.chat_msg.nativeElement.scrollTop = this.chat_msg.nativeElement.scrollHeight;
     });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  send_message(): void {

    if(this.my_form.invalid) {
      this.my_form.markAllAsTouched();
      return;
    }

    let { msg } = this.my_form.value;
    msg = msg.trim();
    this.chat_service.send_message(this.user_name, msg);
  }

}
