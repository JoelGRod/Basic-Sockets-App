import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RXJS
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
// Services
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`

  `]
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('chat_msg') chat_msg!: ElementRef<HTMLElement>;

  private _subscription!: Subscription;
  
  public messages: any[] = [];
  public my_form: FormGroup = this.fb.group({
    from: [ 'Joel', [ Validators.required ] ],
    msg: [ '', [ Validators.required ] ]
  });

  constructor( private chat_service: ChatService,
               private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.chat_service.send_message('Hello from angular');
    this._subscription = this.chat_service.get_messages()
    .pipe(
      tap( msg => this.messages.push(msg) ),
      delay( 100 )
    )
    .subscribe( msg => {
      // console.log(msg);
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

    let { from, msg } = this.my_form.value;
    this.my_form.reset({
      from: from
    });

    from = from.trim();
    msg = msg.trim();

    this.chat_service.send_message(from, msg);
  }

}
