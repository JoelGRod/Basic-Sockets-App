import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.scss']
})
export class PacmanComponent implements OnInit, AfterViewInit {
  
  unityInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/games/pacman/pacman.json");
  }

  ngOnInit(): void {
  }

}
