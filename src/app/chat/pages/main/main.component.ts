import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit, OnDestroy {

  private _subscription!: Subscription;

  public my_form: FormGroup = this.fb.group({
    from: [ '', [ Validators.required ] ],
    msg: [ '', [ Validators.required ] ]
  });

  constructor( private chat_service: ChatService,
               private fb: FormBuilder ) { }

  ngOnInit(): void {
    // this.chat_service.send_message('Hello from angular');
    this._subscription = this.chat_service.get_messages().subscribe( msg => {
      console.log(msg);
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

    const { from, msg } = this.my_form.value;
    this.my_form.reset();

    this.chat_service.send_message(from, msg);
  }

}
