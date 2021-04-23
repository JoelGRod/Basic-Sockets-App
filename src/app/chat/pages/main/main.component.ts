import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`

  `]
})
export class MainComponent implements OnInit {

  // You get this info from auth service (auth module)
  public user_name: string = 'Joel';

  constructor(  ) { }

  ngOnInit(): void {
   
  }

}
