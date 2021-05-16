import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../chat-styles.scss','./chat.component.scss'] 
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('chat_window') chat_window!: ElementRef<HTMLElement>;

  messages: any[] = [
    {
      nickname: 'user1',
      msg: 'hola que tal 1',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user1',
      msg: 'hola que tal 2',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user1',
      msg: 'hola que tal 3',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'user2',
      msg: 'hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
    {
      nickname: 'test',
      msg: 'a la derecha hola que tal 4 esto es una prueba de mensaje largo y pongo muchas coas xq si',
      img: "https://images-na.ssl-images-amazon.com/images/I/81PohdE46lL.jpg"
    },
  ];
  username: string = "test";
  temp_user: string = "";

  public my_form: FormGroup = this._fb.group({
    msg: ['', [ Validators.required ] ]
  });

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  // DELETE THIS
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 5);
    
  }

  send_message(): void {
    const msg = this.my_form.get('msg')!.value;
    this.messages.push({
      nickname: this.username,
      msg
    });

    this.my_form.reset();

    // DELETE THIS
    setTimeout(() => {
      this.chat_window.nativeElement.scrollTop = this.chat_window.nativeElement.scrollHeight;
    }, 5);

  }

  changeTemp(nickname: string): void {
    this.temp_user = nickname;
  }

}
